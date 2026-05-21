import { useState } from 'react';
import { DownloadIcon, CpuIcon, BookOpenIcon, AcademicCapIcon, ChevronDownIcon, ChevronUpIcon } from './Icons';

export default function InstallationsGuide() {
  const [selectedProduct, setSelectedProduct] = useState('autodesk-edu');
  const [openFaq, setOpenFaq] = useState(null);

  const guideData = {
    'autodesk-edu': {
      id: 'autodesk-edu',
      name: 'Autodesk Suite Educativa',
      category: 'Software Académico',
      badge: 'Licencia Escolar',
      badgeColor: '#E02020',
      description: 'Procedimiento de validación académica y descarga de AutoCAD, Revit, Maya, Inventor, 3ds Max y Fusion 360.',
      downloadUrl: 'https://www.autodesk.com/education/edu-software/overview',
      downloadLabel: 'Ir al Portal Académico de Autodesk',
      requirements: [
        { label: 'Sistema Operativo', value: 'Windows 11 / 10 de 64 bits (o macOS Sonoma para AutoCAD/Maya)' },
        { label: 'Procesador', value: 'Intel Core i7 / AMD Ryzen 7 a 2.5 GHz o superior' },
        { label: 'Memoria RAM', value: '16 GB RAM mínimo (32 GB recomendado)' },
        { label: 'Tarjeta Gráfica', value: 'VRAM de 4 GB compatible con DirectX 12 (específica para Revit/3ds Max)' }
      ],
      steps: [
        {
          title: 'Creación de Cuenta Estudiantil',
          desc: 'Visita el portal oficial de educación de Autodesk. Haz clic en "Empezar" y crea una cuenta utilizando tu correo institucional (.edu) o cargando tu comprobante de matrícula académica vigente.'
        },
        {
          title: 'Verificación de Elegibilidad Académica',
          desc: 'Autodesk validará tu perfil de estudiante de forma automática en minutos o mediante una revisión manual de hasta 48 horas de tu credencial o constancia escolar. Recibirás un correo de confirmación de "Acceso Educativo Autorizado".'
        },
        {
          title: 'Descarga e Instalación de Autodesk Desktop App',
          desc: 'Inicia sesión en tu perfil verificado de Autodesk, selecciona el software que necesitas (ej. Revit 2026), elige el idioma y la versión de tu sistema operativo. Descarga el gestor de instalación en línea.'
        },
        {
          title: 'Activación Automática',
          desc: 'Ejecuta el instalador descargado. Al finalizar, inicia sesión con las mismas credenciales universitarias autorizadas dentro del programa. La licencia anual se activará automáticamente sin necesidad de ingresar códigos de serie manuales.'
        }
      ],
      faqs: [
        {
          q: '¿Qué pasa si mi universidad no tiene un dominio de correo .edu?',
          a: 'Puedes registrarte con cualquier correo electrónico y cargar un PDF oficial firmado y sellado por tu facultad que demuestre que eres alumno regular activo (ej. constancia de estudios, boleta de calificaciones).'
        },
        {
          q: '¿Puedo instalar el software en más de un dispositivo?',
          a: 'La licencia educativa de Autodesk permite la instalación y activación en hasta 2 computadoras personales de tu propiedad para uso exclusivamente didáctico y no comercial.'
        },
        {
          q: '¿Cómo renuevo la licencia al finalizar el año?',
          a: '30 días antes del vencimiento, el portal de Autodesk te permitirá solicitar la renovación del estado educativo cargando un comprobante académico actualizado para extender el servicio por otro año gratis.'
        }
      ]
    },
    'gemini-edu': {
      id: 'gemini-edu',
      name: 'Gemini Advanced Education',
      category: 'Inteligencia Artificial',
      badge: 'Suscripción Google',
      badgeColor: '#1A73E8',
      description: 'Activación del modelo Ultra de Inteligencia Artificial de Google y configuración de los 2TB de almacenamiento en la nube.',
      downloadUrl: 'https://gemini.google.com/promo/student',
      downloadLabel: 'Activar Gemini Advanced para Estudiantes',
      requirements: [
        { label: 'Cuenta Requerida', value: 'Cuenta de Google activa vinculada o vinculable a perfil escolar' },
        { label: 'Navegador', value: 'Chrome, Safari, Edge o Firefox (versiones actualizadas)' },
        { label: 'Almacenamiento', value: '2 TB en Google One (Drive, Gmail, Photos)' },
        { label: 'Disponibilidad', value: 'Disponible en más de 150 países en español e inglés' }
      ],
      steps: [
        {
          title: 'Canje de Código de Invitación / Enlace de Activación',
          desc: 'Al comprar el plan en JDATECH, recibirás un enlace de canje único en tu correo. Haz clic en el botón de descarga para ser redirigido a la página oficial de promociones de Google One/Gemini.'
        },
        {
          title: 'Inicio de Sesión y Enlace de Cuenta',
          desc: 'Inicia sesión con la cuenta de Google (personal o institucional) en la que deseas activar el beneficio anual de IA Advanced y los 2 TB de almacenamiento.'
        },
        {
          title: 'Confirmación y Aceptación de Términos',
          desc: 'Revisa el resumen del plan "Gemini Advanced Education - 12 Meses" y haz clic en "Aceptar". No se te cobrará ningún cargo adicional, ya que la licencia está 100% pre-pagada a través de JDATECH.'
        },
        {
          title: 'Verificación e Integración en Workspace',
          desc: 'Abre Gemini Advanced (gemini.google.com) y selecciona el modelo Gemini Advanced 1.5 Pro / Ultra en la esquina superior izquierda. La IA también estará activa inmediatamente en tu panel de Google Docs, Sheets y Slides.'
        }
      ],
      faqs: [
        {
          q: '¿Qué sucede con mis archivos si expira la suscripción de 2 TB?',
          a: 'Si tu suscripción finaliza, tus archivos existentes permanecerán seguros y accesibles en Google Drive, pero no podrás subir archivos nuevos ni recibir correos electrónicos en Gmail hasta que liberes espacio o renueves el plan.'
        },
        {
          q: '¿Puedo transferir la suscripción a otra cuenta de Google?',
          a: 'No. Una vez canjeado el enlace promocional de Google, la licencia queda permanentemente asociada a esa cuenta específica de Google y no puede ser transferida a otro usuario.'
        },
        {
          q: '¿Es compatible con el plan Familiar de Google One?',
          a: 'Este plan de estudiante está diseñado para una sola cuenta y no admite la compartición familiar de los 2 TB ni del acceso a Gemini Advanced con otros miembros del grupo.'
        }
      ]
    },
    'lumion-edu': {
      id: 'lumion-edu',
      name: 'Lumion Pro Student Edition',
      category: 'Renderizado 3D',
      badge: 'Licencia de Precisión',
      badgeColor: '#00C2FF',
      description: 'Guía de descarga del instalador oficial de Lumion, validación de clave estudiantil y requisitos de hardware gráfico.',
      downloadUrl: 'https://lumion.com/products/students.html',
      downloadLabel: 'Solicitar Descarga Lumion Student',
      requirements: [
        { label: 'Sistema Operativo', value: 'Windows 11 / 10 de 64 bits (No compatible con macOS de forma nativa)' },
        { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 3060 / AMD RX 6700 XT o superior con 8GB+ VRAM (Requisito Crítico)' },
        { label: 'Procesador', value: 'Intel Core i7-10700K / AMD Ryzen 7 5800X o superior' },
        { label: 'Almacenamiento', value: '75 GB de espacio disponible en unidad SSD' }
      ],
      steps: [
        {
          title: 'Solicitud del Enlace Oficial',
          desc: 'Dirígete al portal de estudiantes de Lumion usando nuestro enlace directo. Registra tu perfil académico y proporciona la clave de licencia educativa proporcionada en tu recibo de JDATECH.'
        },
        {
          title: 'Recepción del Correo de Instalación',
          desc: 'Lumion te enviará un correo electrónico con el título "Getting Started with Lumion Student". Este contiene tu Clave de Activación personal y el enlace para descargar el Asistente de Descarga de Lumion (Lumion Downloader).'
        },
        {
          title: 'Ejecución del Lumion Downloader',
          desc: 'Descarga y ejecuta el programa *Lumion_Downloader.exe* en un directorio con suficiente espacio de almacenamiento (mínimo 75GB libres en SSD). Este programa descargará los archivos de instalación de forma segura y reanudable.'
        },
        {
          title: 'Instalación y Activación del Software',
          desc: 'Una vez finalizada la descarga, ejecuta el archivo de instalación principal. Al abrir el programa por primera vez, copia y pega la Clave de Activación que recibiste por correo para liberar el acceso completo sin marcas de agua.'
        }
      ],
      faqs: [
        {
          q: '¿Por qué me sale error al iniciar la descarga?',
          a: 'Asegúrate de tener una conexión a internet estable. Si se interrumpe, el Lumion Downloader guardará tu progreso y reanudará la descarga en cuanto la conexión regrese.'
        },
        {
          q: '¿Funciona Lumion en una computadora Mac?',
          a: 'Lumion no se ejecuta de forma nativa en macOS. Puedes utilizarlo en una Mac de arquitectura Intel configurando BootCamp con Windows 10/11 y cumpliendo las especificaciones de tarjeta gráfica externa recomendadas.'
        },
        {
          q: '¿Qué nivel de tarjeta gráfica es necesario para que no vaya lento?',
          a: 'Lumion es un motor 3D en tiempo real extremadamente exigente. Tarjetas de gama media-alta como las NVIDIA GeForce RTX 3060, 4060 o superiores garantizan un renderizado fluido y ágil en tiempo de edición.'
        }
      ]
    },
    'jdatech-hardware': {
      id: 'jdatech-hardware',
      name: 'Dispositivos y Hardware JDATECH',
      category: 'Controladores y Utilidades',
      badge: 'Manuales y Firmware',
      badgeColor: '#8B5CF6',
      description: 'Manuales de usuario interactivos en PDF y software oficial JDATECH Control Center Utility para macOS y Windows.',
      downloadUrl: '#',
      downloadLabel: 'Descargar JDATECH Control Center 2.4.1 (ZIP)',
      requirements: [
        { label: 'Sistemas Compatibles', value: 'Windows 11 / 10 (64-bit) y macOS Ventura 13.0 o superior (Apple Silicon nativo)' },
        { label: 'Conexión Necesaria', value: 'Puerto USB-C 3.2, Bluetooth 5.3 o conexión Wi-Fi de 5GHz para calibración remota' },
        { label: 'Dispositivos Controlados', value: 'Horizon Ultra Monitor (RGB/Perfiles), Apex Watch Pro (Sync), SoundVibe H1 (EQ)' },
        { label: 'Licencia del Software', value: 'Propietaria de JDATECH, 100% gratuita para propietarios de hardware de la marca' }
      ],
      steps: [
        {
          title: 'Descarga del Manual de Usuario o Aplicación de Control',
          desc: 'Descarga la utilidad unificada de JDATECH haciendo clic en el enlace. Este paquete autoinstalable incluye los controladores de audio, ecualización para SoundVibe H1, firmware para Apex Watch Pro y calibración de color DCI-P3 para el Horizon Monitor.'
        },
        {
          title: 'Conexión del Dispositivo por USB o Bluetooth',
          desc: 'Enciende tu dispositivo JDATECH y conéctalo a tu computadora. Si es un Horizon Monitor, usa el puerto USB-C Upstream; si es Apex Watch o SoundVibe, activa el modo de emparejamiento por Bluetooth.'
        },
        {
          title: 'Instalación de la Utilidad de Control',
          desc: 'Ejecuta el archivo de instalación (*JDATECH_ControlCenter_Setup.exe* en Windows o arrastra a Aplicaciones en macOS). Concede permisos de accesibilidad e inicializa la búsqueda de hardware.'
        },
        {
          title: 'Sincronización y Personalización Completa',
          desc: 'La aplicación detectará de inmediato tus dispositivos JDATECH. Podrás actualizar el firmware interno con un solo clic, personalizar las curvas de sonido envolvente, modificar los efectos de retroiluminación LED dinámicos y exportar perfiles de calibración.'
        }
      ],
      faqs: [
        {
          q: '¿Cómo restauro el firmware de fábrica de mis audífonos o reloj?',
          a: 'Dentro de JDATECH Control Center, ve a Configuración > Dispositivos, selecciona tu producto y haz clic en "Restablecimiento de Fábrica". Asegúrate de tener al menos un 50% de batería antes de iniciar.'
        },
        {
          q: '¿Es obligatorio instalar el software para que funcione el monitor Horizon?',
          a: 'No. El monitor funciona como Plug-and-Play de alto rendimiento inmediatamente mediante HDMI o DisplayPort. La utilidad solo es requerida para habilitar perfiles de color premium sRGB/DCI-P3 avanzados y controlar los LEDs traseros desde el sistema.'
        },
        {
          q: '¿El software es compatible con los procesadores Apple Silicon (M1/M2/M3)?',
          a: 'Sí, JDATECH Control Center está compilado de forma nativa para la arquitectura de Apple, ofreciendo un consumo de energía insignificante y total fluidez en macOS.'
        }
      ]
    }
  };

  const currentGuide = guideData[selectedProduct];

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleDownload = (e, url) => {
    if (url === '#') {
      e.preventDefault();
      alert('Iniciando descarga segura de: JDATECH_ControlCenter_v2.4.1.zip (102 MB)... Controladores listos.');
    }
  };

  return (
    <div style={{
      animation: 'slide-line 0.5s var(--ease-out-expo)',
      textAlign: 'left'
    }}>
      {/* Page Header */}
      <div style={{
        borderBottom: '1px solid var(--border)',
        paddingBottom: '20px',
        marginBottom: '32px'
      }}>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
          Centro de Descargas e Instalación
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
          Obtén las utilidades oficiales, manuales de usuario de hardware y los instructivos académicos para activar tus licencias JDATECH.
        </p>
      </div>

      {/* Main Layout Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '260px 1fr',
        gap: '32px',
        alignItems: 'flex-start'
      }} className="installations-split">
        
        {/* Left Navigation Sidebar */}
        <aside style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <h4 style={{
            fontSize: '11px',
            fontWeight: 700,
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '8px',
            paddingLeft: '12px'
          }}>
            Selecciona un Producto
          </h4>
          {Object.values(guideData).map((guide) => {
            const isSelected = selectedProduct === guide.id;
            return (
              <button
                key={guide.id}
                onClick={() => {
                  setSelectedProduct(guide.id);
                  setOpenFaq(null);
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: isSelected ? '1px solid var(--border-glow)' : '1px solid transparent',
                  backgroundColor: isSelected ? 'var(--accent-light)' : 'var(--surface)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'var(--transition-fast)',
                  boxShadow: isSelected ? '0 4px 12px var(--accent-light)' : 'var(--shadow-sm)'
                }}
                className="guide-sidebar-btn"
              >
                <span style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  color: isSelected ? 'var(--accent)' : 'var(--text-secondary)',
                  textTransform: 'uppercase',
                  marginBottom: '4px'
                }}>
                  {guide.category}
                </span>
                <span style={{
                  fontSize: '13.5px',
                  fontWeight: 700,
                  color: isSelected ? 'var(--text-primary)' : 'var(--text-primary)',
                  lineHeight: 1.2
                }}>
                  {guide.name}
                </span>
              </button>
            );
          })}
        </aside>

        {/* Right Content Panel */}
        <section style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          padding: '32px',
          boxShadow: 'var(--shadow-md)',
          position: 'relative',
          overflow: 'hidden'
        }} className="laser-card">
          
          {/* Top Decorative Sparkle */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <span style={{
              backgroundColor: currentGuide.badgeColor + '15',
              color: currentGuide.badgeColor,
              fontSize: '11px',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '20px',
              border: `1px solid ${currentGuide.badgeColor}30`,
              letterSpacing: '0.3px'
            }}>
              {currentGuide.badge}
            </span>
            <span style={{ fontSize: '12.5px', color: 'var(--text-secondary)', fontWeight: 500 }}>
              JDATECH Soporte Autorizado
            </span>
          </div>

          <h3 style={{
            fontSize: '24px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '10px',
            letterSpacing: '-0.3px'
          }}>
            {currentGuide.name}
          </h3>
          <p style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            marginBottom: '28px'
          }}>
            {currentGuide.description}
          </p>

          {/* Download CTA Button */}
          <div style={{ marginBottom: '32px' }}>
            <a
              href={currentGuide.downloadUrl}
              target={currentGuide.downloadUrl === '#' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              onClick={(e) => handleDownload(e, currentGuide.downloadUrl)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                backgroundColor: 'var(--text-primary)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '14px',
                padding: '12px 24px',
                borderRadius: '30px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                transition: 'var(--transition-spring)'
              }}
              className="btn-magnetic download-cta"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>{currentGuide.downloadLabel}</span>
            </a>
          </div>

          {/* System Requirements Grid Panel */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            padding: '20px',
            marginBottom: '32px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '14px'
            }}>
              <CpuIcon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
              <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--text-primary)' }}>
                Requisitos del Sistema / Compatibilidad
              </h4>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              {currentGuide.requirements.map((req, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                    {req.label}
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.35 }}>
                    {req.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Flow */}
          <div style={{ marginBottom: '36px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '20px'
            }}>
              <AcademicCapIcon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>
                Procedimiento de Instalación Paso a Paso
              </h4>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {currentGuide.steps.map((step, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    minWidth: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent) 0%, #8B5CF6 100%)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 700,
                    boxShadow: '0 2px 6px var(--accent-light)'
                  }}>
                    {idx + 1}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' }}>
                    <h5 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {step.title}
                    </h5>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accordion FAQ Section */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px',
              borderTop: '1px solid var(--border)',
              paddingTop: '24px'
            }}>
              <BookOpenIcon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>
                Resolución de Problemas y Preguntas Frecuentes
              </h4>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              {currentGuide.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-secondary)',
                      overflow: 'hidden',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    <button
                      onClick={() => handleFaqToggle(idx)}
                      style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '14px 20px',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '13.5px',
                        color: isOpen ? 'var(--accent)' : 'var(--text-primary)',
                        transition: 'var(--transition-fast)'
                      }}
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUpIcon className="w-4 h-4" />
                      ) : (
                        <ChevronDownIcon className="w-4 h-4" />
                      )}
                    </button>
                    {isOpen && (
                      <div style={{
                        padding: '0 20px 14px 20px',
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.45,
                        animation: 'slide-line 0.3s var(--ease-out-expo)'
                      }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </section>
      </div>

      {/* Installations Responsive styling embedded */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .installations-split {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .download-cta {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        .guide-sidebar-btn:hover {
          background-color: var(--surface-hover) !important;
          transform: translateX(4px);
        }
        .download-cta:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 6px 20px var(--accent-glow) !important;
          background-color: var(--accent) !important;
        }
      `}} />
    </div>
  );
}
