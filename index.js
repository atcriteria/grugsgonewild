const body = document.getElementsByTagName("BODY")[0];
const container = document.getElementById('container');
const modal = document.getElementById("modal");

const grugs = [];

const populateGrugs = () => {
    for (let i = 0; i < people.length; i++) {
        const g = new Grug(people[i].name, people[i].big);
        grugs.push(g.createGrug());
    }
}

populateGrugs();


document.addEventListener("DOMContentLoaded", function() {
    grugs.forEach(grug => {
        grug.move();
    });
});

const dark = document.getElementById("dark");
const suppbtn = document.getElementById("support-btn");
suppbtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    dark.classList.remove("hidden");
})

dark.addEventListener("click", () => {
    if (!dark.classList.contains("hidden")){
        dark.classList.add("hidden");
        modal.classList.add("hidden");
    }
})

const closeButton = document.getElementById("modal-close-btn");
closeButton.addEventListener("click", (e) => {
    modal.classList.add("hidden");
    dark.classList.add("hidden");
})


