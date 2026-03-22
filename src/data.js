export const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export const SKILLS = [
  {
    name: 'Languages',
    tags: [
      { label: 'TypeScript', hot: true },
      { label: 'JavaScript', hot: true },
      { label: 'HTML5' },
      { label: 'CSS3' },
      { label: 'SCSS' },
    ],
  },
  {
    name: 'Frameworks',
    tags: [
      { label: 'Angular', hot: true },
      { label: 'React', hot: true },
      { label: 'RxJS' },
      { label: 'jQuery' },
      { label: 'Bootstrap' },
    ],
  },
  {
    name: 'UI Libraries',
    tags: [
      { label: 'Angular Material' },
      { label: 'Material UI' },
      { label: 'Formik' },
      { label: 'Yup' },
      { label: 'Axios' },
    ],
  },
  {
    name: 'Performance',
    tags: [
      { label: 'Code-splitting', hot: true },
      { label: 'Lazy loading', hot: true },
      { label: 'WCAG 2.1' },
      { label: 'Cross-browser' },
    ],
  },
  {
    name: 'Tools & Platforms',
    tags: [
      { label: 'Git' },
      { label: 'GitHub' },
      { label: 'VS Code' },
      { label: 'Figma' },
      { label: 'REST APIs' },
    ],
  },
  {
    name: 'Practices',
    tags: [
      { label: 'Agile / Scrum' },
      { label: 'Code Reviews' },
      { label: 'Mentoring' },
      { label: 'Feature Ownership' },
    ],
  },
]

export const PROJECTS = [
  {
    num: '01 — Travel',
    name: 'Accommodation Search App',
    icon: '🗺',
    desc: 'A live accommodation-swap platform with real-time search, booking flows, and interactive global maps — built for high engagement and smooth UX.',
    points: [
      'RxJS-powered real-time search, booking & user profiles',
      'Mapbox with custom markers and global clustering',
      'Reusable Angular components with responsive SCSS layouts',
    ],
    tech: ['Angular', 'TypeScript', 'RxJS', 'Mapbox', 'SCSS', 'Bootstrap'],
  },
  {
    num: '02 — Real Estate',
    name: 'CRM Platform',
    icon: '🏠',
    desc: 'A responsive, tailored CRM for real estate — with complex multi-step forms, validation, and seamless backend integration built in React.',
    points: [
      'Formik + Yup for multi-step form flows & validation',
      'Axios API integration with efficient state management',
      'Maintainable component architecture that reduced bugs',
    ],
    tech: ['React', 'TypeScript', 'Axios', 'Material UI', 'Formik', 'Yup'],
  },
  {
    num: '03 — Healthcare',
    name: 'Healthcare CRM',
    icon: '🏥',
    desc: 'Scalable CRM for the healthcare sector with role-based access, secure APIs, and strict industry compliance — led end-to-end from architecture to delivery.',
    points: [
      'Role-based access controls for data privacy compliance',
      'Secure RESTful APIs with Angular Material UI system',
      'WCAG 2.1 accessible across all devices and browsers',
    ],
    tech: ['Angular', 'TypeScript', 'Angular Material', 'SCSS', 'REST APIs'],
  },
  {
    num: '04 — Recruitment · Ongoing',
    name: 'Recruitment Management Platform',
    icon: '👥',
    desc: 'Built entirely from scratch — a full recruitment platform with role-based dashboards, charts, analytics, and video calling integration in progress.',
    points: [
      'Role-based dashboards with real-time charts & analytics',
      'RxJS for smooth data handling and UI performance',
      'Clean scalable architecture ready for future phases',
    ],
    tech: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'SCSS'],
  },
]

export const ACHIEVEMENTS = [
  {
    num: '01',
    strong: 'Architected and delivered core features',
    rest: ' using Angular and React across CRM, recruitment, SaaS, and e-commerce applications — focused on performance, scalability, and responsive design.',
    chip: false,
  },
  {
    num: '02',
    strong: 'Improved application load speed by 40%',
    rest: ' by implementing code-splitting, lazy loading, and performance tuning across high-traffic web applications.',
    chip: true,
  },
  {
    num: '03',
    strong: 'Ensured WCAG 2.1 accessibility compliance',
    rest: ' and cross-browser compatibility across all shipped products.',
    chip: false,
  },
  {
    num: '04',
    strong: 'Took end-to-end ownership of features',
    rest: ' — from planning through delivery — collaborating with QA, backend, and UI/UX teams in Agile sprints.',
    chip: false,
  }
]

export const CONTACT_LINKS = [
  {
    icon: '✉',
    label: 'Email',
    val: 'sachincail48@gmail.com',
    href: 'mailto:sachincail48@gmail.com',
    arr: '↗',
  },
  {
    icon: '☎',
    label: 'Phone',
    val: '+91 99029 16342',
    href: 'tel:+919902916342',
    arr: '↗',
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    val: 'linkedin.com/in/sachincail',
    href: 'https://linkedin.com/in/sachincail',
    arr: '↗',
    isLinkedIn: true,
  },
  {
    icon: '📍',
    label: 'Location',
    val: 'Mangalore, Karnataka, India',
    href: null,
    arr: '',
  },
]
