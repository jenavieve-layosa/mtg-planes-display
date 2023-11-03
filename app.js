const planes = [
    "amys-home",
    "antartic-research-base",
    "aplan-mortarium",
    "bad-wolf-bay", 
    "beseiged-viking-village", 
    "bowie-base-one", 
    "chaotic-aether",
    "city-of-the-daleks",
    "coal-hill-school", 
    "dalek-intensive-care", 
    "gardens-of-tranquil-repose", 
    "hotel-of-fears", 
    "kerblam-warehouse", 
    "lake-silencio", 
    "mondassian-colony-ship", 
    "mutual-epiphany", 
    "new-new-york", 
    "north-pole-research", 
    "ood-sphere", 
    "pompeii", 
    "prime-miniters-cabinet-room", 
    "singing-towers-of-darillium", 
    "spectrox-mines", 
    "the-doctors-childhood-barn", 
    "the-doctors-tomb", 
    "the-drum,-mining-facility", 
    "the-lux-foundation-library", 
    "the-matrix-of-time", 
    "the-moonbase", 
    "the-pyramid-of-mars", 
    "two-streams-facility", 
    "unit-headquarters",
    // add more later 

];

let chosenPlanes = []; // Track chosen planes
let remainingPlanes = [...planes]; // Copy of the planes array

const planeImage = document.getElementById("plane-image");
const randomizeButton = document.getElementById("randomize-button");

function getRandomPlane() {
    if (remainingPlanes.length === 0) {
        // All planes have been picked; reset the list
        remainingPlanes = [...planes];
        chosenPlanes = [];
    }

    const randomIndex = Math.floor(Math.random() * remainingPlanes.length);
    const randomPlane = remainingPlanes.splice(randomIndex, 1)[0]; // Remove the chosen plane from the remaining list
    chosenPlanes.push(randomPlane);

    return randomPlane;
}

randomizeButton.addEventListener("click", () => {
    const randomPlane = getRandomPlane();
    const imageUrl = `https://github.com/jenavieve-layosa/mtg-planes-display/raw/main/images/${randomPlane}.jpg`;

    // Set the image source directly
    planeImage.src = imageUrl;
});

// Initial random plane on page load
randomizeButton.click();

// https://jenavieve-layosa.github.io/mtg-planes-display
