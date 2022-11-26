document.addEventListener("DOMContentLoaded", () => {

            const cardsList = [{
                    name: "acanthopholis",
                    image: "./assets/images/acanthopholis.jpg"
                },
                {
                    name: "acanthopholis",
                    image: "./assets/images/acanthopholis.jpg"
                },
                {
                    name: "parasaurolophus",
                    image: "./assets/images/parasaurolophus.jpg"
                },
                {
                    name: "parasaurolophus",
                    image: "./assets/images/parasaurolophus.jpg"
                },
                {
                    name: "pterodactyl",
                    image: "./assets/images/pterodactyl.jpg"
                },
                {
                    name: "pterodactyl",
                    image: "./assets/images/pterodactyl.jpg"
                },
                {
                    name: "stegosaurus",
                    image: "./assets/images/stegosaurus.jpg"
                },
                {
                    name: "stegosaurus",
                    image: "./assets/images/stegosaurus.jpg"
                },
                {
                    name: "triceratops",
                    image: "./assets/images/triceratops.jpg"
                },
                {
                    name: "triceratops",
                    image: "./assets/images/triceratops.jpg"
                },
                {
                    name: "tyrannosaurusrex",
                    image: "./assets/images/tyrannosaurusrex.jpg"
                }
            ];
            cardsList.sort(() => 0.5 - Math.random());
            const grid = document.querySelector(".memoryGrid");
            const attemptsCount = document.querySelector(".attemptsCount");
            const pairCount = document.querySelector(".pairCount");

            let attempts = 0;
            let twins = 0;
            attemptsCount.textContent = attempts;
            pairCount.textContent = twins;

            let chosenCards = [];
            let chosenCardsIds = [];


            // shuffle cards, initiate memory board

            function runGame() {
                for (let i = 0; i < cardsList.length; i++) {
                    let card = document.createElement("img");
                    card.setAttribute("src", "./assets/images/placeholder.png");
                    card.setAttribute("data-id, id");
                    grid.appendChild(card);
                }
            }
            // flip cards

            function flipCard() {
                if (chosenCards.length != 2) {
                    let cardId = this.getAttribute("data-id");
                    if (this.getAttribute("src") != ".images/blank.png") {
                        chosenCards.push(cardsList[cardId].name);
                        chosenCardsIds.push(cardId);
                        this.setAttribute("src", cardsList[cardId].image);
                        if (chosenCards.length == 2) {
                            setTimeout(checkForMatch, 500);
                        }
                    }
                }
            }
                runGame();
            })





        //check cards for match