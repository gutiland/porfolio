export const projects = [
  {
    id: 'clases-a-tu-ritmo',
    status: 'En proceso',
    titleLines: ['Clases a', 'tu ritmo'],
    category: 'APLICACIÓN FULL STACK',
    description:
      'Aplicación de entrenamiento en desarrollo que propone una experiencia musical y visual para hacer ejercicio en casa. Permite organizar clases por tracks y mostrar indicaciones sincronizadas con el vídeo.',
    vision:
      'La idea nace de mi experiencia en el sector fitness: acercar la energía de una clase colectiva al entrenamiento en casa y permitir que los entrenadores amplíen el alcance de sus clases. El objetivo del MVP es validar esa experiencia; la monetización del contenido y su uso en gimnasios forman parte de la evolución prevista.',
    technologies: ['React', 'SCSS', 'Node.js', 'Express', 'MongoDB'],
    demoUrl: 'https://clases-a-tu-ritmo.vercel.app/',
    repositoryUrl: 'https://github.com/gutiland/Clases_a_tu_ritmo',
    image: '/images/clases_a_tu_ritmo.png',
    imageAlt: 'Pagina de inicio con perfil de entrenador',
    decisions: [
      {
        id: 'tracks',
        title: 'Una clase, varios tracks',
        description:
          'Dividir cada sesión en bloques permite organizar el entrenamiento y dar a cada vídeo sus propias indicaciones.',
      },
      {
        id: 'sincronizacion',
        title: 'El vídeo marca el tiempo',
        description:
          'Los avisos siguen el tiempo de reproducción para mantenerse sincronizados al pausar o cambiar de posición.',
      },
      {
        id: 'roles',
        title: 'Cada rol, su experiencia',
        description:
          'Clientes, entrenadores y administradores tienen acciones diferentes, con comprobación de permisos en la API.',
      },
    ],
  },
]

export const otherProjects = [
  {
    id: 'restaurante-react',
    title: 'Restaurante con React',
    category: 'FRONTEND',
    description:
      'Frontend de restaurante con navegación por páginas, modo oscuro y formulario de reservas con validación. Las reservas son de demostración y no se guardan.',
    technologies: ['React', 'React Router', 'React Hook Form', 'CSS'],
    image: '/images/restaurante.png',
    repositoryUrl: 'https://github.com/gutiland/Proyecto_Restaurante_React',
  },
  {
    id: 'mercedes',
    title: 'Mercedes con HTML y CSS',
    category: 'MAQUETACIÓN WEB',
    description:
      'Ejercicio de maquetación responsive inspirado en Mercedes-Benz, con HTML y CSS. Proyecto educativo sin afiliación con la marca.',
    technologies: ['HTML', 'CSS', 'Flexbox', 'Grid'],
    image: '/images/mercedes.png',
    imageAlt: 'Pgina del proyecto educativo inspirado en Mercedes-Benz',
    demoUrl: 'https://gutiland.github.io/Proyecto-Mercedes/',
    repositoryUrl: 'https://github.com/gutiland/Proyecto-Mercedes',
  },
]
