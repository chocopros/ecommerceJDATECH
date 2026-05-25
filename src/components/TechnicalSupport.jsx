import { useState } from 'react';
import { WhatsAppIcon } from './Icons';

export default function TechnicalSupport() {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 'networking',
      icon: '🌐',
      title: 'Ingeniería de Redes, Conectividad y Ciberseguridad',
      image: '/network_security_tech.png',
      badge: 'Infraestructura MikroTik',
      badgeColor: 'var(--accent)',
      description: 'Diseño, optimización y aseguramiento de plataformas de conectividad de alta disponibilidad.',
      items: [
        {
          subTitle: 'Arquitectura de Redes Corporativas',
          details: 'Diseño, configuración y puesta en marcha de infraestructuras de red robustas utilizando equipamiento profesional MikroTik (RouterOS). Implementación de topologías seguras tanto para entornos de oficina como para redes industriales.'
        },
        {
          subTitle: 'Optimización y Gestión de Tráfico (QoS)',
          details: 'Configuración de políticas avanzadas de Calidad de Servicio (QoS) y balanceo de carga para garantizar la estabilidad de las comunicaciones críticas de la empresa, priorizando VoIP, videoconferencias y transferencias críticas.'
        },
        {
          subTitle: 'Conectividad Remota y Teletrabajo Seguro',
          details: 'Despliegue de redes privadas virtuales (VPN) avanzadas para la interconexión segura de sucursales (Site-to-Site) y acceso remoto de colaboradores, con enrutamiento especial libre de restricciones geográficas.'
        }
      ],
      whatsappMsg: 'Hola JDATECH! Me gustaría solicitar una cotización/consultoría sobre Ingeniería de Redes y Ciberseguridad.'
    },
    {
      id: 'cloud',
      icon: '☁️',
      title: 'Administración Cloud y Blindaje de Datos',
      image: '/cloud_management_tech.png',
      badge: 'SaaS / Respaldo Híbrido',
      badgeColor: '#A142F4',
      description: 'Migración y resguardo de la información crítica corporativa bajo estándares estrictos de ciberseguridad.',
      items: [
        {
          subTitle: 'Ecosistema Corporativo Microsoft 365',
          details: 'Gestión integral y administración avanzada del entorno M365 (SharePoint, OneDrive corporativo) y blindaje de correos mediante políticas estrictas de seguridad (Anti-Spam, Anti-Phishing, SPF, DKIM, DMARC).'
        },
        {
          subTitle: 'Almacenamiento y Backup Redundante',
          details: 'Implementación de servidores de almacenamiento local NAS Synology bajo esquemas híbridos, automatizando copias de seguridad en caliente y en la nube para planes de recuperación ante desastres.'
        },
        {
          subTitle: 'Estrategias de Correo Híbrido (Split Domain)',
          details: 'Consultoría y migración técnica para unificar dominios corporativos dividiendo los servicios entre servidores de bajo costo y entornos de alto rendimiento, optimizando costos anuales de licenciamiento.'
        }
      ],
      whatsappMsg: 'Hola JDATECH! Me interesa saber más sobre las soluciones de Administración Cloud y Blindaje de Datos.'
    },
    {
      id: 'support',
      icon: '🛠️',
      title: 'Soporte Técnico Especializado y Hardware Crítico',
      badge: 'Nivel Avanzado & CAD/BIM',
      badgeColor: '#FF9500',
      description: 'Soporte informático corporativo preventivo y correctivo de hardware y software de alto rendimiento.',
      customGraphic: true, // Render custom high tech SVG workstation layout
      items: [
        {
          subTitle: 'Soporte de Entornos Técnicos de Alta Exigencia',
          details: 'Soporte de nivel avanzado, instalación y mantenimiento de software CAD/BIM para ingeniería y arquitectura (Autodesk Revit, AutoCAD, Bluebeam, Suite Office 365), exprimiendo al máximo la capacidad del software.'
        },
        {
          subTitle: 'Diagnóstico y Mantenimiento de Hardware Crítico',
          details: 'Reparación, ensamblaje y repotenciación correctiva de estaciones de trabajo (Workstations) de alto rendimiento y servidores locales, maximizando el ciclo de vida de tu inversión de hardware.'
        },
        {
          subTitle: 'Infraestructura Eléctrica y Cableado Estructurado',
          details: 'Despliegue de redes físicas de datos (switches, patch panels, cableado estructurado certificado) y dimensionamiento de sistemas de respaldo de energía (UPS) para proteger tus equipos contra fallas eléctricas.'
        }
      ],
      whatsappMsg: 'Hola JDATECH! Me gustaría solicitar soporte técnico especializado para mi empresa / estaciones de trabajo.'
    },
    {
      id: 'automation',
      icon: '🤖',
      title: 'Automatización y Entornos Self-Hosted',
      image: '/ai_local_server.png',
      badge: 'IA Privada & Docker',
      badgeColor: '#30D158',
      description: 'Despliegue local de herramientas inteligentes avanzadas y automatizaciones bajo entornos virtuales independientes.',
      items: [
        {
          subTitle: 'Inteligencia Artificial Local y Privada (Self-Hosted)',
          details: 'Implementación e integración de interfaces web privadas para el uso concurrente de IA (Gemini, ChatGPT) bajo contenedores Docker locales, asegurando 100% de confidencialidad de tus datos corporativos.'
        },
        {
          subTitle: 'Sistemas Modernos de Videovigilancia y Automatización',
          details: 'Circuitos cerrados de televisión (CCTV) híbridos (IP/Analógicos) con acceso remoto seguro encriptado, combinando seguridad perimetral física y automatizaciones inteligentes aplicadas a tu oficina.'
        }
      ],
      whatsappMsg: 'Hola JDATECH! Deseo cotizar soluciones de Inteligencia Artificial Local y Automatización de entornos.'
    }
  ];

  const filteredServices = activeTab === 'all' ? services : services.filter(s => s.id === activeTab);

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      
      {/* 1. HERO BANNER DE SOPORTE */}
      <div style={{
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        minHeight: '340px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '48px',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-lg)',
        backgroundImage: 'linear-gradient(rgba(10, 10, 12, 0.45), rgba(10, 10, 12, 0.85)), url("/it_infrastructure_hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '40px'
      }} className="support-hero">
        <div style={{ maxWidth: '720px', zIndex: 2, textAlign: 'left' }}>
          <span style={{
            backgroundColor: 'var(--accent-light)',
            color: 'var(--accent)',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            padding: '6px 14px',
            borderRadius: '20px',
            letterSpacing: '1px',
            display: 'inline-block',
            marginBottom: '16px',
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--border)'
          }}>
            Servicios Profesionales IT
          </span>
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.15,
            letterSpacing: '-1px',
            marginBottom: '16px'
          }}>
            Infraestructura Tecnológica,<br />
            Soporte IT y Conectividad Avanzada
          </h1>
          <p style={{
            fontSize: 'clamp(14px, 2.5vw, 16.5px)',
            color: '#E3E3E7',
            lineHeight: 1.5,
            fontWeight: 400
          }}>
            Diseño, optimización y aseguramiento de plataformas informáticas corporativas. Aseguramos la continuidad operativa, seguridad del dato y escalabilidad de tu negocio.
          </p>
        </div>
      </div>

      {/* 2. RESUMEN PROFESIONAL */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '40px',
        marginBottom: '64px',
        alignItems: 'center',
        textAlign: 'left'
      }} className="professional-summary-row">
        <div>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.5px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ fontSize: '28px' }}>💼</span> Resumen Profesional
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-primary)',
            lineHeight: 1.6,
            marginBottom: '16px',
            fontWeight: 500
          }}>
            Me dedico al diseño, optimización y aseguramiento de plataformas tecnológicas e infraestructura informática corporativa. Con un enfoque híbrido que combina la precisión de la ingeniería con la versatilidad de la administración de sistemas, implemento soluciones orientadas a la continuidad del negocio, la seguridad de la información y la máxima eficiencia de los recursos.
          </p>
          <p style={{
            fontSize: '14.5px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6
          }}>
            Mi experiencia abarca desde el despliegue de redes avanzadas de alta disponibilidad y la gestión de entornos Cloud empresariales, hasta el soporte técnico especializado en software de alta exigencia técnica y la automatización de flujos de trabajo. Transformo la infraestructura tecnológica en un activo estratégico estable, seguro, escalable y perfectamente alineado con los objetivos operativos de cada organización.
          </p>
        </div>

        {/* METRICAS DE CONFIANZA */}
        <div style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          boxShadow: 'var(--shadow-sm)',
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid var(--border)', paddingBottom: '12px', marginBottom: '8px' }}>
            Indicadores Clave
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 900, color: 'var(--accent)' }}>99.9%</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', marginTop: '4px' }}>Disponibilidad (SLA)</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 900, color: '#A142F4' }}>MikroTik</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', marginTop: '4px' }}>RouterOS Certified</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 900, color: '#30D158' }}>Docker</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', marginTop: '4px' }}>AI Self-Hosted</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 900, color: '#FF9500' }}>Synology</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', marginTop: '4px' }}>Redundant Backups</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. TABS FILTRADO DE SERVICIOS */}
      <div style={{
        borderBottom: '1px solid var(--border)',
        marginBottom: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '12px'
      }}>
        <div style={{ textAlign: 'left' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
            Catálogo de Servicios Completo
          </h2>
          <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Soluciones robustas orientadas a la continuidad del negocio y el blindaje de datos.
          </p>
        </div>
        
        {/* FILTERS */}
        <div style={{
          display: 'flex',
          gap: '8px',
          backgroundColor: 'var(--surface)',
          padding: '4px',
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }} className="service-tabs">
          {['all', 'networking', 'cloud', 'support', 'automation'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? 'var(--accent)' : 'none',
                color: activeTab === tab ? '#ffffff' : 'var(--text-secondary)',
                border: 'none',
                padding: '8px 16px',
                fontSize: '12.5px',
                fontWeight: 600,
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              {tab === 'all' ? 'Ver Todos' : tab === 'networking' ? 'Redes' : tab === 'cloud' ? 'Cloud' : tab === 'support' ? 'Soporte' : 'IA/CCTV'}
            </button>
          ))}
        </div>
      </div>

      {/* 4. GRID DE TARJETAS DE SERVICIO */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px'
      }}>
        {filteredServices.map(service => (
          <div
            key={service.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '40px',
              alignItems: 'center',
              boxShadow: 'var(--shadow-md)',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'left'
            }}
            className="service-card"
          >
            {/* TEXT COLUMN */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontSize: '24px' }}>{service.icon}</span>
                <span style={{
                  backgroundColor: 'var(--bg-secondary)',
                  color: service.badgeColor,
                  border: `1px solid ${service.badgeColor}33`,
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: '12px'
                }}>
                  {service.badge}
                </span>
              </div>
              <h3 style={{
                fontSize: '22px',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.3px',
                lineHeight: 1.25,
                marginBottom: '12px'
              }}>
                {service.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
                marginBottom: '28px'
              }}>
                {service.description}
              </p>

              {/* SERVICE SUB-ITEMS */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                {service.items.map((sub, i) => (
                  <div key={i} style={{ borderLeft: `2px solid ${service.badgeColor}88`, paddingLeft: '16px' }}>
                    <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {sub.subTitle}
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                      {sub.details}
                    </p>
                  </div>
                ))}
              </div>

              {/* WHATSAPP ACTION BUTTON */}
              <a
                href={`https://wa.me/584148100986?text=${encodeURIComponent(service.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  padding: '12px 24px',
                  borderRadius: '24px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                className="btn-whatsapp-support"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Cotizar o Consultar Servicio
              </a>
            </div>

            {/* VISUAL COLUMN (Generated IA Image or Custom High Tech SVG) */}
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              height: '380px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--bg-secondary)'
            }} className="service-visual">
              {service.customGraphic ? (
                /* Beautiful complex SVG CAD/Workstation Blueprint diagram */
                <svg className="w-full h-full p-8" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.85 }}>
                  <defs>
                    <linearGradient id="supportGlow" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FF9500" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#FF453A" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="cadLines" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#FF9500" />
                      <stop offset="100%" stopColor="#FF453A" />
                    </linearGradient>
                  </defs>
                  {/* Grid blueprint lines */}
                  <rect x="10" y="10" width="180" height="180" fill="url(#supportGlow)" stroke="#FF9500" strokeWidth="1" strokeOpacity="0.2" rx="8" />
                  <line x1="10" y1="50" x2="190" y2="50" stroke="var(--border)" strokeWidth="0.5" strokeOpacity="0.5" strokeDasharray="2 2" />
                  <line x1="10" y1="100" x2="190" y2="100" stroke="var(--border)" strokeWidth="0.5" strokeOpacity="0.5" strokeDasharray="2 2" />
                  <line x1="10" y1="150" x2="190" y2="150" stroke="var(--border)" strokeWidth="0.5" strokeOpacity="0.5" strokeDasharray="2 2" />
                  <line x1="50" y1="10" x2="50" y2="190" stroke="var(--border)" strokeWidth="0.5" strokeOpacity="0.5" strokeDasharray="2 2" />
                  <line x1="100" y1="10" x2="100" y2="190" stroke="var(--border)" strokeWidth="0.5" strokeOpacity="0.5" strokeDasharray="2 2" />
                  <line x1="150" y1="10" x2="150" y2="190" stroke="var(--border)" strokeWidth="0.5" strokeOpacity="0.5" strokeDasharray="2 2" />

                  {/* Workstation box layout */}
                  <rect x="40" y="40" width="120" height="120" stroke="url(#cadLines)" strokeWidth="1.5" strokeDasharray="4 4" rx="4" />
                  <circle cx="100" cy="100" r="45" stroke="#FF9500" strokeWidth="1.5" />
                  <circle cx="100" cy="100" r="12" fill="#FF9500" fillOpacity="0.1" stroke="#FF9500" strokeWidth="1" />
                  
                  {/* Inner blueprint details */}
                  <path d="M100 25 L100 175 M25 100 L175 100" stroke="#FF9500" strokeWidth="0.75" strokeOpacity="0.3" />
                  <rect x="85" y="85" width="30" height="30" stroke="#FF453A" strokeWidth="1" strokeDasharray="2 1" />
                  <circle cx="100" cy="100" r="3" fill="#FF453A" />
                  
                  {/* Compass HUD arrows */}
                  <path d="M100 40 L104 46 H96 Z M100 160 L104 154 H96 Z M40 100 L46 104 V96 Z M160 100 L154 104 V96 Z" fill="#FF9500" />
                  <text x="105" y="38" fill="#FF9500" fontSize="8" fontWeight="bold">REVIT / CAD</text>
                  <text x="105" y="172" fill="#FF453A" fontSize="8" fontWeight="bold">UPS OK</text>
                </svg>
              ) : (
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="visual-img"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Animations and CSS overrides */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .btn-whatsapp-support {
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease, filter 0.25s ease !important;
        }
        .btn-whatsapp-support:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5) !important;
          filter: brightness(1.08);
        }
        .btn-whatsapp-support:active {
          transform: translateY(0) scale(0.97);
        }
        .service-card {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
          border-color: var(--accent) !important;
          box-shadow: 0 10px 30px var(--accent-light) !important;
        }
        .service-card:hover .visual-img {
          transform: scale(1.05);
        }
        @media (max-width: 992px) {
          .service-card {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding: 28px !important;
          }
          .service-visual {
            height: 280px !important;
            grid-row: 1 !important; /* Move visual element to top on mobile layouts */
          }
          .professional-summary-row {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 600px) {
          .support-hero {
            padding: 24px !important;
            min-height: 280px !important;
          }
          .service-tabs {
            display: none !important; /* Hide service sub filters on compact devices to preserve layouts */
          }
        }
      `}} />

    </div>
  );
}
