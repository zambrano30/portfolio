// Exportar el array de habilidades
export const skills = [
    {
        name:"Html",
        nivel:"90%",
        icon:"./images/html.svg"
    },
      {
        name:"Css",
        nivel:"90%",
        icon:"./images/css.svg"
    },
      {
        name:"JavaScript",
        nivel:"60%",
        icon:"./images/javascript.svg"
    },
      {
        name:"Tailwind",
        nivel:"50%",
        icon:"./images/tailwind.svg"
        
    },
      {
        name:"React",
        nivel:"20%",
        icon:"./images/react.svg"
    },
      {
        name:"Python",
        nivel:"75%",
        icon:"./images/python.svg"
    }
];

// Función para ordenar skills por nivel de dominio
export function sortSkillsByLevel(skillsArray) {
    return skillsArray.sort((a, b) => {
        const nivelA = parseInt(a.nivel.replace('%', ''));
        const nivelB = parseInt(b.nivel.replace('%', ''));
        return nivelB - nivelA;
    });
}

// Función para renderizar las habilidades
export function renderSkills() {
    let implementarSkills = document.querySelector("#skills");
    
    if (implementarSkills) {
        // Ordenar skills antes de renderizar
        const sortedSkills = sortSkillsByLevel([...skills]);
        
        for (let i = 0; i < sortedSkills.length; i++) {
            implementarSkills.innerHTML += `
            <div class="skill-item flex flex-col items-center p-4 bg-white dark:bg-slate-700  rounded-lg shadow-md mb-4 opacity-0 translate-y-4 transition-all duration-500 ease-out" style="animation-delay: ${i * 200}ms ">
                <img class="w-16 h-16 mb-3 transition-transform duration-300 hover:scale-110" src="${sortedSkills[i].icon}" alt="${sortedSkills[i].name}"> 
                <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">${sortedSkills[i].name}</h3>
                <div class="w-40 bg-gray-300 dark:bg-gray-600 rounded-full h-3 mb-2 lg:w-60 overflow-hidden shadow-inner">
                    <div class="h-3 rounded-full transition-all duration-1000 ease-out skill-progress" style="width: 0%; background: linear-gradient(90deg, #0891b2, #0e7490, #155e75); box-shadow: 0 2px 4px rgba(8, 145, 178, 0.3);" data-width="${sortedSkills[i].nivel}"></div>
                </div>
                <p class="text-sm font-medium text-gray-600 dark:text-slate-300">${sortedSkills[i].nivel}</p>
            </div>`;
        }
        
        // Animar la aparición de las skills
        setTimeout(() => {
            const skillItems = document.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.remove('opacity-0', 'translate-y-4');
                    item.classList.add('opacity-100', 'translate-y-0');
                    
                    // Animar la barra de progreso
                    const progressBar = item.querySelector('.skill-progress');
                    const targetWidth = progressBar.getAttribute('data-width');
                    setTimeout(() => {
                        progressBar.style.width = targetWidth;
                    }, 300);
                }, index * 200);
            });
        }, 100);
    }
}

// Función para toggle del modo oscuro (placeholder para mantener compatibilidad)
export function toggleDarkMode() {
    // Esta función puede ser implementada según sea necesario
    console.log("Toggle dark mode for skills");
}

// Ejecutar automáticamente cuando se carga el módulo
document.addEventListener('DOMContentLoaded', renderSkills);
