const API_URL = 'https://api-kurse.onrender.com/items/courses';
const API_FIELDS = 'fields=id,title,description,image_url,keywords.course_keywords_id.name,type.name,education_type.name';

const fallbackCourses = [
  {
    id: 1,
    title: 'Grundlagen der Programmierung',
    description: 'Einstieg in Programmierlogik, Datenstrukturen und erste eigene Anwendungen.',
    image_url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    category: 'programmierung',
    badge: 'Programmierung',
    format: 'Online',
    duration: '8 Wochen'
  },
  {
    id: 2,
    title: 'Business Intelligence mit Power BI',
    description: 'Kennzahlen aufbereiten, Berichte gestalten und Entscheidungen verständlich machen.',
    image_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    category: 'daten',
    badge: 'Daten & BI',
    format: 'Online',
    duration: '6 Wochen'
  }
];

const courseList = document.getElementById('course-list');
const filterButtons = document.querySelectorAll('.chip');
const searchInput = document.querySelector('.search-bar input');

let allCourses = [...fallbackCourses];
let activeFilter = 'all';
let searchTerm = '';

function getText(value) {
  return typeof value === 'string' ? value : '';
}

function normalizeDescription(text) {
  return text
    .replace(/!.*$/gm, '')
    .replace(/\*+/g, '')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getCourseCategory(course) {
  const keywords = Array.isArray(course.keywords)
    ? course.keywords
        .map((item) => item?.course_keywords_id?.name || item?.name || '')
        .join(' ')
    : '';

  const haystack = [
    course.title || '',
    course.description || '',
    keywords,
    course.type?.name || '',
    course.education_type?.name || ''
  ].join(' ').toLowerCase();

  if (/(power bi|dax|sql|daten|data|business intelligence|analytics|visualisierung|database)/i.test(haystack)) {
    return 'daten';
  }

  if (/(scrum|agil|kanban|backlog|sprint|projektmanagement|ms project|projekt)/i.test(haystack)) {
    if (/(scrum|agil|kanban|backlog|sprint)/i.test(haystack)) {
      return 'agile';
    }
    return 'projekt';
  }

  if (/(security|cyber|sicherheit|it-security|cloud security)/i.test(haystack)) {
    return 'security';
  }

  if (/(karriere|coaching|bewerbung|job|career|neustart)/i.test(haystack)) {
    return 'karriere';
  }

  if (/(business|analyst|anforderung|prozesse|prozess|management)/i.test(haystack)) {
    return 'business';
  }

  if (/(programm|software|java|javascript|python|frontend|backend|api|entwicklung|c\#|html|css)/i.test(haystack)) {
    return 'programmierung';
  }

  return 'programmierung';
}

function getBadgeLabel(category) {
  const labels = {
    programmierung: 'Programmierung',
    daten: 'Daten & BI',
    projekt: 'Projektmanagement',
    agile: 'Agile Methoden',
    business: 'Business Analyse',
    security: 'IT-Security',
    karriere: 'Karriere & Coaching'
  };

  return labels[category] || 'Kurs';
}

function getFormat(course) {
  const type = getText(course.type?.name || course.format || '');
  const education = getText(course.education_type?.name || '');

  if (!type && !education) return 'Kurs';

  if (/vollzeit/i.test(education)) return 'Präsenz';
  if (/teilzeit/i.test(education)) return 'Online';
  if (/hybrid|blended/i.test(type + ' ' + education)) return 'Hybrid';

  return type || education || 'Kurs';
}

function mapCourse(course) {
  const category = getCourseCategory(course);

  return {
    id: course.id,
    title: getText(course.title),
    description: normalizeDescription(getText(course.description)),
    image: course.image_url || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    category,
    badge: getBadgeLabel(category),
    format: getFormat(course),
    duration: course.duration_weeks ? `${course.duration_weeks} Wochen` : 'Kurs',
    link: course.slug ? `#${course.slug}` : '#'
  };
}

function getFilteredCourses() {
  let filtered = [...allCourses];

  if (activeFilter !== 'all') {
    filtered = filtered.filter((course) => course.category === activeFilter);
  }

  if (searchTerm.trim()) {
    const query = searchTerm.trim().toLowerCase();

    filtered = filtered.filter((course) => {
      const text = [
        course.title,
        course.description,
        course.badge,
        course.category,
        course.format,
        course.duration
      ]
        .join(' ')
        .toLowerCase();

      return text.includes(query);
    });
  }

  return filtered;
}

function renderCourses() {
  const visibleCourses = getFilteredCourses();

  if (!visibleCourses.length) {
    courseList.innerHTML = '<p class="empty-state">Keine Kurse zu diesem Filter gefunden.</p>';
    return;
  }

  courseList.innerHTML = visibleCourses
    .map(
      (course) => `
        <article class="course-card">
          <div class="card-image">
            <img src="${course.image}" alt="${course.title}" loading="lazy" />
          </div>
          <div class="card-body">
            <span class="badge ${course.category}">${course.badge}</span>
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <div class="meta">
              <span>${course.format}</span>
              <span>${course.duration}</span>
            </div>
            <a class="card-link" href="${course.link}" aria-label="Mehr zu ${course.title}">
              Zum Kurs
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </article>
      `
    )
    .join('');
}

function updateFilterState(selectedFilter) {
  activeFilter = selectedFilter;

  filterButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.filter === selectedFilter);
  });

  renderCourses();
}

async function loadCourses() {
  try {
    const response = await fetch(`${API_URL}?${API_FIELDS}&limit=50`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer 12345',
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`API-Fehler: ${response.status}`);
    }

    const payload = await response.json();
    const rawCourses = Array.isArray(payload?.data) ? payload.data : [];

    allCourses = rawCourses.map(mapCourse);
    renderCourses();
  } catch (error) {
    console.warn('Live-API konnte nicht geladen werden. Fallback wird verwendet.', error);
    allCourses = fallbackCourses.map((course) => ({
      ...course,
      category: course.category,
      badge: course.badge,
      format: course.format,
      duration: course.duration,
      link: '#'
    }));
    renderCourses();
  }
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    updateFilterState(button.dataset.filter);
  });
});

searchInput.addEventListener('input', (event) => {
  searchTerm = event.target.value;
  renderCourses();
});

renderCourses();
loadCourses();
