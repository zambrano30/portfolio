const projectsArray = [
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

let projectsCard = document.querySelector("#projects_cards");

for (let i = 0; i < projectsArray.length; i++) {
  projectsCard.innerHTML += `
    <a href="${projectsArray[i].link}" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-auto rounded-t-lg h-96 md:h-auto md:w-auto md:rounded-none md:rounded-s-lg" src="${projectsArray[i].image}" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal lg:grid lg:grid-cols-2  ">
        <h5 class="mb-2 place-content-around text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${projectsArray[i].name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${projectsArray[i].description}</p>
    </div>
</a>
`;
}
