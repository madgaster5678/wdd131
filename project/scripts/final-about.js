const today = new Date()
document.getElementById("currentyear").textContent = today.getFullYear()
document.getElementById("lastmodified").textContent = document.lastModified
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
menuButton.addEventListener("click", () => {menu.classList.toggle("menu-hidden") 
    if (menu.classList.contains("menu-hidden")) {
    menuButton.textContent = "☰";
} else {
    menuButton.textContent = "✕";
}});

const games = [
    {
        gameName: "Java Jump",
        devName: "ElderlyJava",
        releaseDate: 1997,
        imageURL: "images/javajump-image.svg",
        gameType: "2D Platformer",
    },
    {
        gameName: "Mad Devil Dash",
        devName: "D.J Cry",
        releaseDate: 2010,
        imageURL: "images/maddevildash-image.webp",
        gameType: "Beat em Up",
    },
    {
        gameName: "Undertone",
        devName: "Master Max",
        releaseDate: 2005,
        imageURL: "images/undertone-image.png",
        gameType: "2D Platformer",
    },
    {
        gameName: "Jump Dash",
        devName: "madcores",
        releaseDate: 2025,
        imageURL: "images/jumpdash-image.png",
        gameType: "2D Platformer",
    },
    {
        gameName: "Space Cannon Blast",
        devName: "Void Core Games",
        releaseDate: 2008,
        imageURL: "images/spacecannonblast-image.webp",
        gameType: "Beat em Up",
    },
    {
        gameName: "Angel Stray",
        devName: "AngelJohn",
        releaseDate: 1995,
        imageURL: "images/angelstray-image.jpg",
        gameType: "Beat em Up",
    },
    {
        gameName: "Witch Storm",
        devName: "YellowBelly",
        releaseDate: 2016,
        imageURL: "images/witchstorm-image.png",
        gameType: "2D Platformer",
    },
    {
        gameName: "Wizard Hurricane",
        devName: "YellowBelly",
        releaseDate: 2020,
        imageURL: "images/wizardhurricane-image.png",
        gameType: "2D Platformer",
    },
    {
        gameName: "Fish Master Combat",
        devName: "Shipcores",
        releaseDate: 2012,
        imageURL: "images/fishmastercombat-image.png",
        gameType: "Beat em Up",
    },
    {
        gameName: "Oil Cleanup Crew",
        devName: "Petmore Games",
        releaseDate: 1990,
        imageURL: "images/oilcleanupcrew-image.png",
        gameType: "2D Platformer",
    }
];

const gameContainer = document.getElementById("game-container");
const allGames = document.querySelector(".all");
allGames.addEventListener("click", () => {
    displayGames(games);
});
const olderGames = document.querySelector(".older");
const olderGameList = games.filter((game) => game.releaseDate < 2000);
olderGames.addEventListener("click", () => {
    displayGames(olderGameList);
});
const newerGames = document.querySelector(".newer");
const newerGameList = games.filter((game) => game.releaseDate > 2000);
newerGames.addEventListener("click", () => {
    displayGames(newerGameList);
});
const platformGames = document.querySelector(".two-d-platform");
const platformGameList = games.filter((game) => game.gameType === "2D Platformer");
platformGames.addEventListener("click", () => {
    displayGames(platformGameList);
});
const beatEmUpGames = document.querySelector(".beat-em-up");
const beatEmUpGameList = games.filter((game) => game.gameType === "Beat em Up");
beatEmUpGames.addEventListener("click", () => {
    displayGames(beatEmUpGameList);
});

function displayGames(gameList) {
    const cards = gameContainer.querySelectorAll("article");

    cards.forEach((card) => {
        card.remove();
    });
    gameList.forEach((game) => {
        const gameCard = document.createElement("article");
        const title = document.createElement("h2");
        title.textContent = game.gameName;
        const developer = document.createElement("p");
        developer.textContent = `Developer: ${game.devName}`;
        const release = document.createElement("p");
        release.textContent = `Released in ${game.releaseDate}`;
        const type = document.createElement("p");
        type.textContent = game.gameType;
        const image = document.createElement("img");
        image.src = game.imageURL;
        image.alt = game.gameName;
        image.loading = "lazy";
        gameCard.appendChild(title);
        gameCard.appendChild(developer);
        gameCard.appendChild(image);
        gameCard.appendChild(type);
        gameCard.appendChild(release);
        gameContainer.appendChild(gameCard);
    });
}

displayGames(games);