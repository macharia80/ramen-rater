const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
];
function displayRamens(){
    const ramenMenu = document.getElementById("ramen-menu");

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen)); 
        ramenMenu.appendChild(img);
    });

    
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }
}

function handleClick(ramen) {
    
    const ramenDetail = document.getElementById("ramen-detail");

   
    ramenDetail.innerHTML = `
        <img src="${ramen.image}" alt="${ramen.name}">
        <h2>${ramen.name}</h2>
        <h3>${ramen.restaurant}</h3>
        <p><strong>Rating:</strong> ${ramen.rating || "No rating available"} / 5</p>
        <p><strong>Comment:</strong> ${ramen.comment || "No comment available"}</p>
    `;
}
function main() {
    displayRamens();
}

document.addEventListener("DOMContentLoaded", main);
function addSubmitListener() {
    const form = document.getElementById("new-ramen");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload

        // Get user input values from the form
        const name = document.getElementById("name").value;
        const restaurant = document.getElementById("restaurant").value;
        const image = document.getElementById("image").value;
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;

        
        const newRamen = { name, restaurant, image, rating, comment };

        
        const ramenMenu = document.getElementById("ramen-menu");
        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;

        
        img.addEventListener("click", () => handleClick(newRamen));

        
        ramenMenu.appendChild(img);

    
        form.reset();
    });
}
function main() {
    displayRamens();       
    addSubmitListener();   
}

document.addEventListener("DOMContentLoaded", main);