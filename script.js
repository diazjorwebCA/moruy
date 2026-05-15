// Data for the interactive modals
const infoData = {
    'brecha': {
        title: 'Brecha Teórico-Práctica',
        description: 'Existe una separación marcada entre los contenidos de las ciencias escolares y las necesidades socio-productivas de la comunidad de Moruy. Esta desconexión impide que el conocimiento académico se traduzca en beneficios tangibles para la región.'
    },
    'limitaciones': {
        title: 'Limitaciones Estudiantiles',
        description: 'Se observa en los estudiantes de educación diversificada una baja motivación intrínseca, acompañada de una carencia de herramientas que promuevan la autonomía y el trabajo en equipo cooperativo.'
    },
    'entorno': {
        title: 'Subutilización del Entorno',
        description: 'El Cerro Santa Ana, a pesar de su riqueza ambiental y cultural, no se aprovecha plenamente como un recurso pedagógico para el aprendizaje activo y la identidad regional.'
    },
    'viabilidad': {
        title: 'Viabilidad Territorial',
        description: 'Uso exclusivo de recursos propios de la Península de Paraguaná, asegurando un costo mínimo de implementación para la sostenibilidad del proyecto.'
    },
    'pertinencia': {
        title: 'Pertinencia Social',
        description: 'Las soluciones diseñadas deben responder directamente a problemas reales diagnosticados en la comunidad de Moruy, logrando un impacto positivo y palpable.'
    },
    'innovacion': {
        title: 'Innovación Educativa',
        description: 'Integración de marcos de gestión empresarial y tecnológica (metodologías ágiles como Scrum y EduScrum) dentro del sistema de educación media general.'
    },
    'sostenibilidad': {
        title: 'Sostenibilidad',
        description: 'Alineación completa con el desarrollo sustentable y la preservación de la identidad local falconiana, respetando la naturaleza y promoviendo el equilibrio.'
    },
    'agiles': {
        title: 'Metodologías Ágiles',
        description: 'Formar a los estudiantes en los fundamentos de Scrum y EduScrum. Un componente clave es el uso de tableros visuales offline para la gestión efectiva del tiempo y las tareas, adaptándose a las condiciones del entorno local sin depender totalmente de recursos digitales.'
    },
    'diagnostico': {
        title: 'Diagnóstico Comunitario',
        description: 'Identificar necesidades reales y potencialidades socio-productivas y ambientales dentro de la parroquia Moruy y el área de influencia del Cerro Santa Ana.'
    },
    'diseno': {
        title: 'Diseño Colectivo de Soluciones',
        description: 'Desarrollar propuestas científicas y sustentables que utilicen recursos propios de la Península de Paraguaná, promoviendo de forma constante la co-creación y cooperación entre los estudiantes.'
    },
    'sprints': {
        title: 'Construcción de Prototipos',
        description: 'Ejecutar el desarrollo de soluciones a través de ciclos de trabajo cortos y enfocados (Sprints), lo que permite una evaluación constante de la mejora continua del equipo y la viabilidad o funcionalidad del prototipo que se construye.'
    },
    'legal_crbv': {
        title: 'Constitución Nacional (CRBV)',
        description: 'La Constitución de la República Bolivariana de Venezuela establece en sus artículos 102 y 103 el derecho a una educación integral y de calidad. El artículo 299 promueve el desarrollo armónico de la economía nacional, vinculando la educación con el desarrollo socioproductivo.'
    },
    'legal_loe': {
        title: 'Ley Orgánica de Educación (LOE)',
        description: 'La LOE en su artículo 15 señala como fines de la educación el desarrollo del potencial creativo y la formación en, por y para el trabajo socioproductivo, sustentado en una perspectiva de desarrollo endógeno.'
    },
    'legal_locti': {
        title: 'Ley Orgánica de Ciencia y Tecnología',
        description: 'La Ley Orgánica de Ciencia, Tecnología e Innovación fomenta la democratización y apropiación social del conocimiento, estimulando proyectos que resuelvan problemas concretos de las comunidades mediante la ciencia y la tecnología.'
    },
    'legal_plan': {
        title: 'Plan de la Patria',
        description: 'El proyecto se alinea con los grandes objetivos históricos del Plan de la Patria, específicamente en defender la independencia nacional mediante la soberanía tecnológica y fomentar un modelo socioproductivo sustentable.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Scroll Animations ---
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    // --- Modal Logic ---
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close-modal');
    const interactiveBtns = document.querySelectorAll('.interactive-btn');
    
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');

    const openModal = (targetId) => {
        const data = infoData[targetId];
        if (!data) return;

        // Populate Data
        modalTitle.textContent = data.title;
        modalText.textContent = data.description;
        
        // Show Modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    // Event Listeners
    interactiveBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Prevent event bubbling if necessary
            e.stopPropagation();
            const target = btn.getAttribute('data-target');
            openModal(target);
        });
    });

    closeBtn.addEventListener('click', closeModal);

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
