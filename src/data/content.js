export const profile = {
  name: 'Shaik Shaikshavalli',
  role: 'Java Full Stack Developer',
  location: 'Bangalore, Karnataka, India',
  email: 'sshaiksha446@gmail.com',
  phone: '+91 63043 42338',
  phoneHref: 'tel:+916304342338',
  linkedin: 'https://linkedin.com/in/shaik-shaikshavalli',
  github: 'https://github.com/Sshaikshavalli',
  resume: './Shaik-Shaikshavalli-Resume.pdf',
  seeking: 'Software Engineer or Graduate Engineer Trainee',
}

export const about = {
  summary:
    'I build scalable web applications with Java, Spring Boot, Hibernate and MySQL. In my internship at TAP Academy I delivered 10+ REST APIs using layered architecture and the DAO pattern, and I care about the unglamorous parts that make software last: clean structure, fast queries and secure data access.',
  facts: [
    { label: 'Based in', value: 'Bangalore, India' },
    { label: 'Looking for', value: 'Software Engineer or Graduate Engineer Trainee' },
    { label: 'Degree', value: 'B.Tech, Computer Science Engineering (2025)' },
    { label: 'Works best with', value: 'Java, Spring Boot, Hibernate, MySQL' },
  ],
}

export const job = {
  title: 'Java Full Stack Developer Intern',
  company: 'TAP Academy, Bangalore',
  dates: 'May 2025 to January 2026',
  highlights: [
    { value: '30%', label: 'faster API response time' },
    { value: '35%', label: 'faster data loads' },
    { value: '25%', label: 'less duplicated code' },
    { value: '100%', label: 'critical endpoints passing' },
  ],
  points: [
    'Engineered 3 backend modules with Java and Spring Boot, cutting average API response time by 30% through an optimized service-layer architecture.',
    'Delivered 10+ RESTful API endpoints with Spring MVC, connecting 4 frontend modules to the database layer with zero downtime during integration.',
    'Applied MVC, DAO and Singleton patterns across the codebase, reducing code duplication by 25% and improving peer review scores.',
    'Resolved N+1 query issues in 15 Hibernate ORM mappings using lazy loading and fetch strategies, improving data load speed by 35%.',
    'Automated the Maven build and validated 20 API workflows in Postman, reaching a 100% pass rate on all critical service endpoints.',
    'Completed 3 sprint releases on schedule in a 5-member Agile team, taking part in planning, reviews and retrospectives.',
    'Managed source code for 2 projects on GitHub with feature branching, logging 50+ commits and keeping a clean merge history.',
  ],
}

export const skills = [
  { group: 'Languages', items: ['Java (Core and Advanced)', 'JavaScript'] },
  { group: 'Backend', items: ['Spring Boot', 'Spring MVC', 'Hibernate ORM', 'JPA', 'JDBC', 'REST API'] },
  { group: 'Core Java', items: ['OOP', 'DAO Pattern', 'Design Patterns', 'Exception Handling', 'Multithreading', 'Collections Framework'] },
  { group: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Web Design'] },
  { group: 'Databases', items: ['MySQL', 'Joins', 'Normalization'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Maven', 'Postman', 'Eclipse', 'VS Code'] },
]

export const education = [
  {
    title: 'Bachelor of Technology, Computer Science Engineering',
    school: 'Annamacharya Institute of Technology and Sciences, Kadapa',
    board: 'JNTU-A',
    years: '2022 to 2025',
    score: '70.0%',
  },
  {
    title: 'Diploma in Mechanical Engineering',
    school: 'Global College of Engineering and Technology, Kadapa',
    board: 'AP SBTET',
    years: '2019 to 2022',
    score: '68.98%',
  },
  {
    title: 'Secondary School Certificate',
    school: 'ZPHS School Ganganapalli, Andhra Pradesh',
    board: 'Board of Secondary Education',
    years: '2019',
    score: '82%',
  },
]

export const projects = {
  food: {
    title: 'Food Delivery Application',
    kind: 'Full stack web application',
    github: 'https://github.com/Sshaikshavalli/Food-Deliver-Application',
    text: 'A food delivery system with a layered DAO architecture, 12 API routes and a responsive frontend for mobile, tablet and desktop. Each layer can be tested independently.',
    flow: ['Registration', 'Menu', 'Cart', 'Checkout', 'Payment', 'Order tracking'],
    facts: [
      { value: '20%', label: 'fewer client-server round trips than page reloads' },
      { value: '30%', label: 'lower coupling between modules' },
      { value: '99%', label: 'billing accuracy across 5 pricing variables' },
      { value: '100%', label: 'of database calls use PreparedStatements' },
    ],
    tech: ['Java', 'Spring Boot', 'Spring MVC', 'Hibernate', 'JDBC', 'MySQL', 'REST API', 'HTML5', 'CSS3', 'JavaScript'],
  },
  hospital: {
    title: 'Hospital Management System',
    kind: 'Java application with JDBC',
    github: 'https://github.com/Sshaikshavalli/Hospital-Management-System',
    text: 'Manages patient, doctor and appointment records with complete CRUD operations. The DAO pattern over JDBC separates data access from business logic, and a normalized MySQL schema with primary and foreign keys keeps the data consistent.',
    tech: ['Java', 'JDBC', 'DAO Pattern', 'MySQL'],
  },
  hirenest: {
    title: 'HireNest Employment Management API',
    kind: 'Spring Boot REST API',
    text: 'A backend service that tracks employment records for full-time staff and interns. It validates every request, returns consistent JSON errors, and fills in probation dates and status automatically when they are not provided.',
    points: [
      '11 endpoints under /api/employment covering create, read, filter, update and delete',
      'Filters by domain, employment type and status',
      'Bean Validation on requests and a global exception handler: 400 for bad input, 404 when not found, 409 for a duplicate employee',
      'Probation end date defaults to start date plus the probation months, and status becomes ON_PROBATION when an end date exists',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL', 'Bean Validation', 'Swagger (springdoc)', 'REST API'],
  },
}

const BASE = 'http://localhost:8080/api/employment'

const sampleRecord = {
  id: 1,
  employeeId: 101,
  domain: 'Java',
  employmentType: 'FULL_TIME',
  joiningDate: '2025-05-01',
  status: 'ON_PROBATION',
  probationPeriod: 3,
  probationStartDate: '2025-05-01',
  probationEndDate: '2025-08-01',
}
const sampleRecord2 = {
  id: 2,
  employeeId: 102,
  domain: 'React Js',
  employmentType: 'INTERN',
  joiningDate: '2025-06-16',
  status: 'ACTIVE',
  probationPeriod: null,
  probationStartDate: null,
  probationEndDate: null,
}
const sampleBody = {
  employeeId: 101,
  domain: 'Java',
  employmentType: 'FULL_TIME',
  joiningDate: '2025-05-01',
  probationPeriod: 3,
}

export const endpoints = [
  {
    method: 'POST', path: '/api/employment', title: 'Create an employment record',
    status: 201, body: sampleBody, response: sampleRecord,
    notes: 'Required: employeeId, domain, employmentType, joiningDate. Status is set to ON_PROBATION because a probation end date is calculated.',
    errors: ['400 validation failed or invalid enum value', '409 employee already has a record'],
  },
  {
    method: 'GET', path: '/api/employment', title: 'Get all records',
    status: 200, response: [sampleRecord, sampleRecord2],
    notes: 'Returns every employment record as a JSON array.', errors: [],
  },
  {
    method: 'GET', path: '/api/employment/{id}', example: '/api/employment/1', title: 'Get a record by id',
    status: 200, response: sampleRecord,
    notes: 'Looks up by the record id.', errors: ['404 record not found'],
  },
  {
    method: 'GET', path: '/api/employment/employee/{employeeId}', example: '/api/employment/employee/101', title: 'Get a record by employee id',
    status: 200, response: sampleRecord,
    notes: 'Each employee has at most one record, because employee_id is unique.', errors: ['404 no record for this employee'],
  },
  {
    method: 'GET', path: '/api/employment/domains', title: 'List all domains',
    status: 200,
    response: ['Java', 'Python', 'React Js', 'Mern Stack', 'DevOps', 'DevSecOps', 'Data Analyst', 'Data Engineering', 'Data Science'],
    notes: 'Display names for populating a dropdown in the frontend.', errors: [],
  },
  {
    method: 'GET', path: '/api/employment/domain/{domain}', example: '/api/employment/domain/java', title: 'Filter by domain',
    status: 200, response: [sampleRecord],
    notes: 'Accepts the display name or enum name. Case, spaces, underscores and hyphens are ignored, so "react-js" and "React Js" both work.',
    errors: ['400 invalid domain, with the allowed values listed'],
  },
  {
    method: 'GET', path: '/api/employment/type/{type}', example: '/api/employment/type/INTERN', title: 'Filter by employment type',
    status: 200, response: [sampleRecord2],
    notes: 'Type is FULL_TIME or INTERN.', errors: ['400 invalid type'],
  },
  {
    method: 'GET', path: '/api/employment/status/{status}', example: '/api/employment/status/ON_PROBATION', title: 'Filter by status',
    status: 200, response: [sampleRecord],
    notes: 'Status is ACTIVE, ON_PROBATION, INACTIVE, RESIGNED or TERMINATED.', errors: ['400 invalid status'],
  },
  {
    method: 'PUT', path: '/api/employment/{id}', example: '/api/employment/2', title: 'Update a full record',
    status: 200,
    body: { employeeId: 102, domain: 'React Js', employmentType: 'FULL_TIME', joiningDate: '2025-06-16', status: 'ACTIVE' },
    response: { ...sampleRecord2, employmentType: 'FULL_TIME' },
    notes: 'Replaces the record. Same validation as create.',
    errors: ['400 validation failed', '404 record not found', '409 employeeId belongs to another record'],
  },
  {
    method: 'PATCH', path: '/api/employment/{id}/status', example: '/api/employment/1/status?status=ACTIVE', title: 'Update only the status',
    status: 200, response: { ...sampleRecord, status: 'ACTIVE' },
    notes: 'Pass the new status as the query parameter "status".', errors: ['400 invalid status', '404 record not found'],
  },
  {
    method: 'DELETE', path: '/api/employment/{id}', example: '/api/employment/2', title: 'Delete a record',
    status: 204, response: null,
    notes: 'Returns 204 No Content with an empty body.', errors: ['404 record not found'],
  },
]

export const API_BASE = BASE
