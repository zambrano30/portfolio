// Exportar el array de proyectos
export const projectsArray = [
  {
    name: "Rafting Website",
    description:
      "This project was created to showcase an adventure rafting company with modern web design and responsive layout.",
    image: "./images/rafting-page.png",
    link:"https://zambrano30.github.io/wdd130/wwr/about.html",
  },
  {
    name: "Bakery Website",
    description:
      "This project was created to showcase a local bakery business with an elegant design featuring product galleries, menu displays, and online ordering functionality.",
    image: "./images/bakery-page.png",
    link:"https://zambrano30.github.io/Homepage/home",
  },
  {
    name: "Course page",
    description:
      "A personal information website showcasing academic background, skills, and professional development with clean, modern design and responsive layout.",
    image: "./images/Coursepage.png",
    link:"https://zambrano30.github.io/wdd131/",
  },
];

// Función para renderizar las tarjetas de proyectos
export function renderProjectCards() {
  let projectsCard = document.querySelector("#projects_cards");
  
  if (projectsCard) {
    for (let i = 0; i < projectsArray.length; i++) {
      projectsCard.innerHTML += `
        <a href="${projectsArray[i].link}" target="_blank" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full max-w-4xl mx-auto mb-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 opacity-0 translate-y-4" style="animation-delay: ${i * 150}ms">
        <img class="object-cover w-full h-48 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg transition-transform duration-300 hover:scale-105" src="${projectsArray[i].image}" alt="${projectsArray[i].name}">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl transition-colors duration-300 hover:text-cyan-600 dark:hover:text-cyan-400">${projectsArray[i].name}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 transition-colors duration-300">${projectsArray[i].description}</p>
          <div class="inline-flex items-center mt-2 text-cyan-600 dark:text-cyan-400 font-medium hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors duration-300">
            Ver proyecto
            <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </div>
      </div>
  </a>
  `;
    }
    
    // Animar la aparición de las tarjetas de proyectos
    setTimeout(() => {
      const projectCards = document.querySelectorAll('#projects_cards > a');
      projectCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.remove('opacity-0', 'translate-y-4');
          card.classList.add('opacity-100', 'translate-y-0');
        }, index * 150);
      });
    }, 100);
  }
}

// Función para toggle del modo oscuro (placeholder para mantener compatibilidad)
export function toggleDark() {
  // Esta función puede ser implementada según sea necesario
  console.log("Toggle dark mode for projects");
}

// Ejecutar automáticamente cuando se carga el módulo
document.addEventListener('DOMContentLoaded', renderProjectCards);

