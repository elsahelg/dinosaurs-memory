
document.addEventListener("DOMContentLoaded", () => {

    const cardsList = [
    {
        name: "acanthopholis",
        image: ".assets/images/acanthopholis.jpg"    
    },
    {
        name: "acanthopholis",
        image: ".assets/images/acanthopholis.jpg"    
    },
    {
        name: "parasaurolophus",
        image: ".assets/images/parasaurolophus.jpg"    
    },
    {
        name: "parasaurolophus",
        image: ".assets/images/parasaurolophus.jpg"    
    },
    {
        name: "pterodactyl",
        image: ".assets/images/pterodactyl.jpg"    
    },
    {
        name: "pterodactyl",
        image: ".assets/images/pterodactyl.jpg"    
    },
    {
        name: "stegosaurus",
        image: ".assets/images/stegosaurus.jpg"    
    },
    {
        name: "stegosaurus",
        image: ".assets/images/stegosaurus.jpg"    
    },
    {
        name: "triceratops",
        image: ".assets/images/triceratops.jpg"
    },
    {
        name: "triceratops",
        image: ".assets/images/triceratops.jpg"
    },
    {
        name: "tyrannosaurusrex",
        image: ".assets/images/tyrannosaurusrex.jpg"
    }
    ];
    const grid = document.querySelectorAll(".memoryGrid");

// shuffle cards, initiate memory board
    
    function runGame(){
        for (let i = 0; i < cardsList.length; i++){
        let card = document.createElement("img");
        card.setAttribute("src", ".assets/images/placeholder.png");
        card.setAttribute("data-id, i");
        grid.appendChild(card);
        }
    }

    runGame();
})


// flip cards


//check cards for match