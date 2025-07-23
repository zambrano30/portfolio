const skills = [
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
]

// Ordenar skills por nivel de dominio (de mayor a menor)
skills.sort((a, b) => {
    const nivelA = parseInt(a.nivel.replace('%', ''));
    const nivelB = parseInt(b.nivel.replace('%', ''));
    return nivelB - nivelA;
});

let implementarSkills = document.querySelector("#skills");
for (let i = 0; i < skills.length; i++) {
    implementarSkills.innerHTML+=`
    <div class="skill-item flex flex-col items-center p-4 bg-white rounded-lg shadow-md mb-4">
        <img class="w-16 h-16 mb-3" src="${skills[i].icon}" alt="${skills[i].name}"> 
        <h3 class="text-lg font-semibold mb-2">${skills[i].name}</h3>
        <div class="w-40 bg-gray-300 rounded-full h-3 mb-2 lg:w-60">
            <div class="bg-cyan-700 h-3 rounded-full transition-all duration-300" style="width:${skills[i].nivel}"></div>
        </div>
        <p class="text-sm font-medium text-gray-600">${skills[i].nivel}</p>
    </div>`
}
