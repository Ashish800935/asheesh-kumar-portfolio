// Single source of truth for all portfolio content.
// Edit this file to update the site — no component changes needed.

export const personal = {
  name: 'Asheesh Kumar',
  title: 'AI/ML & Generative AI Developer',
  tagline:
    'I build intelligent applications using Machine Learning, NLP, LLMs, RAG, and agentic AI systems.',
  email: 'ashishkumarkushwaha716@gmail.com',
  phone: '+91 7992055765',
  location: 'Ghaziabad, Uttar Pradesh, India',
  availability: 'Open to Opportunities',
  photo: '/my_profile.png',
  resume: '/Asheesh_Kumar_Resume_.pdf',
  footerTagline: 'AI/ML • Generative AI • NLP',
};

export const socials = {
  github: 'https://github.com/Ashish800935',
  linkedin: 'https://www.linkedin.com/in/asheesh-kumar-b24284239/',
  leetcode: 'https://leetcode.com/u/ashish800935/',
  codolio: 'https://codolio.com/profile/ashish800935/problemSolving',
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Education', to: '/education' },
  { label: 'Contact', to: '/contact' },
];

export const techStrip = [
  'Python',
  'Machine Learning',
  'NLP',
  'LLMs',
  'RAG',
  'LangChain',
  'LangGraph',
  'FastAPI',
];

export const about = {
  paragraphs: [
    'I am an Information Technology undergraduate at ABES Engineering College, focused on Machine Learning, NLP, Deep Learning, and Generative AI.',
    'I enjoy turning AI concepts into practical applications — from NLP and deep learning models to RAG systems, AI agents, and deployable APIs.',
  ],
  whatIBuild: [
    { title: 'RAG Applications', icon: 'search' },
    { title: 'AI Agents', icon: 'bot' },
    { title: 'NLP Applications', icon: 'message' },
    { title: 'ML Models', icon: 'chart' },
    { title: 'Deep Learning Systems', icon: 'brain' },
    { title: 'REST APIs', icon: 'server' },
    { title: 'AI-powered Applications', icon: 'sparkles' },
  ],
};

export const skillCategories = [
  {
    title: 'Generative AI & LLMs',
    icon: 'sparkles',
    skills: [
      'LangChain',
      'LangGraph',
      'RAG',
      'pgvector',
      'FAISS',
      'Agentic Tool Calling',
      'Sentence Transformers',
      'Pydantic Structured Output',
      'Prompt Engineering',
      'LangSmith',
    ],
  },
  {
    title: 'Machine Learning & NLP',
    icon: 'chart',
    skills: [
      'Scikit-learn',
      'XGBoost',
      'Feature Engineering',
      'EDA',
      'Text Preprocessing',
      'Tokenization',
      'TF-IDF',
      'Attention Mechanism',
      'Transformers',
    ],
  },
  {
    title: 'Deep Learning',
    icon: 'brain',
    skills: [
      'TensorFlow',
      'Keras',
      'PyTorch (Basics)',
      'ANN',
      'CNN',
      'RNN',
      'LSTM',
      'BiGRU',
      'Sequence Modeling',
    ],
  },
  {
  title: 'Data & Databases',
  icon: 'database',
  skills: [
    'Pandas',
    'NumPy',
    'SQL',
    'PostgreSQL',
    'pgvector',
    'SQLite',
    'Relational Database Modeling',
  ],
},
  {
    title: 'Deployment & Tools',
    icon: 'server',
    skills: [
      'FastAPI',
      'Streamlit',
      'Docker',
      'Docker Compose',
      'REST APIs',
      'Git',
      'GitHub',
      'Linux',
      'VS Code',
    ],
  },
  {
    title: 'Core CS',
    icon: 'cpu',
    skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
];

// To use a real screenshot later: drop a file into /public/projects/ and set
// `image: '/projects/your-file.png'` on the project. The gradient preview is
// shown automatically whenever `image` is empty or fails to load.
export const projectFilters = ['All', 'Generative AI', 'NLP', 'Deep Learning'];

export const projects = [
  {
    id: 'enterprise-hybrid-rag',
    title: 'Enterprise Hybrid-RAG Engine',
    categories: ['Generative AI'],
    description:
      'A containerized Hybrid-RAG engine combining dense semantic retrieval and sparse full-text search using PostgreSQL pgvector.',
    tech: ['Python', 'LangChain', 'PostgreSQL', 'pgvector', 'FastAPI', 'Docker', 'Streamlit'],
    highlights: [
      'HNSW indexing',
      'LangChain LCEL',
      'Pydantic structured outputs',
      'Tool-calling agent',
      'Hybrid dense + sparse search',
      'Docker Compose',
      'CPU-only optimization',
    ],
    metrics: [{ value: '~10GB → ~1.2GB', label: 'Production image size' }],
    github: 'https://github.com/Ashish800935/enterprise-rag-engine',
    demo: 'https://enterprise-hybrid-rag-akk.streamlit.app/',
    image: '/projects/rag-ss.png',
    gradient: 'from-cyan-500/30 via-sky-500/20 to-violet-500/30',
    visual: 'rag',
  },
  {
    id: 'quora-duplicate-detection',
    title: 'Quora Duplicate Question Detection',
    categories: ['NLP'],
    description:
      'An NLP system that predicts whether two questions are duplicates using engineered linguistic features and semantic similarity.',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Sentence-Transformers', 'FastAPI', 'Streamlit'],
    highlights: [
      '404K labeled pairs',
      '30K training sample',
      '20+ engineered features',
      'TF-IDF',
      'Fuzzy matching',
      'Sentence-Transformer similarity',
      'XGBoost',
      'FastAPI + Streamlit',
    ],
    metrics: [
      { value: '84.1%', label: 'Accuracy' },
      { value: '0.342', label: 'Log-Loss' },
    ],
    github: 'https://github.com/Ashish800935/quora-question-pairs',
    demo: 'https://quora-duplicate-checker-akk.streamlit.app/',
    image: '/projects/quora1.png',
    gradient: 'from-violet-500/30 via-fuchsia-500/20 to-sky-500/30',
    visual: 'pairs',
  },
  {
    id: 'emotion-classification',
    title: 'Emotion Classification NLP',
    categories: ['NLP', 'Deep Learning'],
    description:
      'A deep learning NLP application that classifies text into six emotion classes: Joy, Sadness, Anger, Fear, Love, and Surprise.',
    tech: ['Python', 'TensorFlow/Keras', 'BiGRU', 'FastAPI', 'Pydantic', 'HTML/CSS/JavaScript'],
    highlights: [
      'BiGRU architecture',
      'Six emotion classes',
      'FastAPI REST service',
      'Swagger docs',
      'Confidence + class probabilities',
      'Interactive web frontend',
    ],
    metrics: [
      { value: '92.25%', label: 'Test Accuracy' },
      { value: '88.61%', label: 'Macro F1' },
      { value: '92.45%', label: 'Weighted F1' },
    ],
    github: 'https://github.com/Ashish800935/emotion-classification-nlp',
    demo: 'https://emotion-classification-nlp-1.onrender.com/',
    image: '/projects/emotion_ss.png',
    gradient: 'from-emerald-500/25 via-cyan-500/20 to-violet-500/30',
    visual: 'emotion',
  },
];

export const achievements = {
  stats: [
    { value: '330+', label: 'LeetCode Problems Solved' },
    { value: '1600', label: 'Maximum LeetCode Rating' },
  ],
 statement:
  'Focused on building practical AI applications alongside strong problem-solving fundamentals.',
};

export const education = [
  {
    period: '2023 – 2027',
    school: 'ABES Engineering College',
    degree: 'B.Tech in Information Technology',
    score: 'CGPA: 7.94',
  },
  {
    period: '2021 – 2022',
    school: 'Jawahar Navodaya Vidyalaya',
    degree: 'Class XII',
    score: '88%',
  },
  {
    period: '2019 – 2020',
    school: 'Jawahar Navodaya Vidyalaya',
    degree: 'Class X',
    score: '88.6%',
  },
];
