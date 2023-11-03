const planes = [
    "Dominaria",
    "Zendikar",
    "Innistrad",
    // Add more plane names as needed
];

const planeImage = document.getElementById("plane-image");
const randomizeButton = document.getElementById("randomize-button");

randomizeButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * planes.length);
    const randomPlane = planes[randomIndex];
    const imageUrl = `https://github.com/yourusername/mtg-plane-display/raw/main/images/${randomPlane}.jpg`;

    planeImage.src = imageUrl;
});

// Initial random plane on page load
randomizeButton.click();
