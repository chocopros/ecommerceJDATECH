export const products = [
  {
    id: 'autodesk-edu',
    name: 'Autodesk Suite Educativa',
    category: 'licenses',
    price: 10,
    rating: 4.8,
    reviewsCount: 142,
    shortDescription: 'Licencia académica anual para AutoCAD, Revit, Maya, 3ds Max y más.',
    description: 'Obtén acceso completo por un año a la suite líder de diseño en ingeniería, arquitectura y animación 3D. La licencia educativa de Autodesk está validada para estudiantes, ofreciendo todas las funcionalidades profesionales a un costo académico altamente preferencial.',
    colors: [
      { name: 'Rojo Autodesk', value: '#E02020', accent: '#E02020' },
      { name: 'Gris Carbón', value: '#1E1E1E', accent: '#86868B' }
    ],
    specs: [
      { label: 'Duración', value: '1 Año (Acceso Completo y Actualizaciones)' },
      { label: 'Software', value: 'Civil 3D, AutoCAD, Revit, Infrawork, Inventor, 3ds Max' },
      { label: 'Soporte', value: 'Servicio en la nube oficial y foros académicos de Autodesk' },
      { label: 'Activación', value: 'Instantánea mediante autenticación con correo institucional (.edu o com)' }
    ],
    reviews: [
      { user: 'Carlos V.', rating: 5, comment: 'Activación rapida y acceso a todas las herramientas que uso en mi carrera.' },
      { user: 'Mariana P.', rating: 4.5, comment: 'Excelente opción para estudiantes de Civil y Arquitectura. Revit corre sin limitaciones.' }
    ],
    featured: true,
    illustration: (color = '#E02020') => (
      <svg className="w-full h-full p-6 transition-all duration-500" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="autodeskGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FF453A" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="60" r="40" fill="url(#autodeskGlow)" />
        <path d="M100 25 L135 85 L115 85 L100 55 L85 85 L65 85 Z" fill="#1D1D1F" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M100 25 L85 85 L100 55 Z" fill={color} opacity="0.8" />
        <line x1="50" y1="85" x2="150" y2="85" stroke="#86868B" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <line x1="100" y1="20" x2="100" y2="100" stroke="#86868B" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
      </svg>
    )
  },
  {
    id: 'gemini-edu',
    name: 'Gemini Advanced Education 18 months ',
    category: 'licenses',
    price: 25,
    rating: 4.9,
    reviewsCount: 310,
    shortDescription: 'Suscripción months premium para estudiantes con IA Ultra y 2TB cloud.',
    description: 'Acelera tu productividad estudiantil y tus proyectos de investigación con Gemini Advanced. Consigue acceso prioritario al modelo Ultra de Google, mayor ventana de contexto, integración inteligente con Google Workspace (Docs, Sheets, Slides) y 2 TB de almacenamiento seguro en la nube.',
    colors: [
      { name: 'Azul Google', value: '#1A73E8', accent: '#1A73E8' },
      { name: 'Púrpura Gemini', value: '#A142F4', accent: '#A142F4' }
    ],
    specs: [
      { label: 'Motor de IA', value: 'Gemini Ultra con razonamiento lógico superior' },
      { label: 'Almacenamiento', value: '2 Terabytes en Google One para copias de seguridad' },
      { label: 'Productividad', value: 'Escritura inteligente e investigación en Docs y Sheets' },
      { label: 'Requisitos', value: 'Enlace directo a cuenta de estudiante Google Workspace' }
    ],
    reviews: [
      { user: 'Sofía L.', rating: 5, comment: 'Me ayuda muchísimo a resumir documentos científicos y estructurar mis ensayos.' },
      { user: 'Juan Manuel D.', rating: 4.8, comment: 'La integración con Google Docs es simplemente genial. Vale totalmente la pena.' }
    ],
    featured: false,
    illustration: (color = '#1A73E8') => (
      <svg className="w-full h-full p-6 transition-all duration-500" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="geminiGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1A73E8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#A142F4" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="sparkleGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1A73E8" />
            <stop offset="100%" stopColor="#A142F4" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="60" r="40" fill="url(#geminiGlow)" />
        <path d="M100 25 C100 45, 110 55, 130 60 C110 65, 100 75, 100 95 C100 75, 90 65, 70 60 C90 55, 100 45, 100 25 Z" fill="url(#sparkleGrad)" stroke={color} strokeWidth="1" />
        <path d="M132 38 C132 44, 135 47, 141 49 C135 51, 132 54, 132 60 C132 54, 129 51, 123 49 C129 47, 132 44, 132 38 Z" fill="#A142F4" opacity="0.9" />
        <ellipse cx="100" cy="60" rx="48" ry="12" stroke="#86868B" strokeWidth="1" strokeDasharray="4 4" transform="rotate(-15 100 60)" opacity="0.5" />
      </svg>
    )
  }
];
