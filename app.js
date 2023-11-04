const planes = [
    "academy-at-tolaria-west",
    "akoum",
    "amys-home",
    "antartic-research-base",
    "aplan-mortarium",
    "astral-arena",
    "bad-wolf-bay", 
    "besieged-viking-village", 
    "bowie-base-one", 
    "chaotic-aether",
    "city-of-the-daleks",
    "cliffside-market",
    "coal-hill-school", 
    "dalek-intensive-care",
    "edge-of-malacol",
    "fields-of-summer",
    "furnace-layer", 
    "gardens-of-tranquil-repose",
    "gavony", 
    "glen-elendra",
    "hotel-of-fears", 
    "kerblam-warehouse", 
    "interplanner-tunnel",
    "lake-silencio", 
    "mondassian-colony-ship", 
    "morpic-tide",
    "mutual-epiphany", 
    "new-new-york", 
    "north-pole-research-base", 
    "ood-sphere", 
    "pompeii", 
    "prime-ministers-cabinet-room", 
    "singing-towers-of-darillium", 
    "spectrox-mines", 
    "the-doctors-childhood-barn", 
    "the-doctors-tomb", 
    "the-drum-mining-facility",
    "the-eon-fog", 
    "the-lux-foundation-library", 
    "the-matrix-of-time", 
    "the-moonbase", 
    "the-pyramid-of-mars", 
    "time-distortion",
    "two-streams-facility", 
    "unit-headquarters",
    // add more later 

];

let chosenPlanes = []; // Track chosen planes
let remainingPlanes = [

    "academy-at-tolaria-west",
    "akoum",
    "amys-home",
    "antartic-research-base",
    "aplan-mortarium",
    "astral-arena",
    "bad-wolf-bay", 
    "besieged-viking-village", 
    "bowie-base-one", 
    "chaotic-aether",
    "city-of-the-daleks",
    "cliffside-market",
    "coal-hill-school", 
    "dalek-intensive-care",
    "edge-of-malacol",
    "fields-of-summer",
    "furnace-layer", 
    "gardens-of-tranquil-repose",
    "gavony", 
    "glen-elendra",
    "hotel-of-fears", 
    "kerblam-warehouse", 
    "interplanner-tunnel",
    "lake-silencio", 
    "mondassian-colony-ship", 
    "morphic-tide",
    "mutual-epiphany", 
    "new-new-york", 
    "north-pole-research-base", 
    "ood-sphere", 
    "pompeii", 
    "prime-ministers-cabinet-room", 
    "singing-towers-of-darillium", 
    "spectrox-mines", 
    "the-doctors-childhood-barn", 
    "the-doctors-tomb", 
    "the-drum-mining-facility",
    "the-eon-fog", 
    "the-lux-foundation-library", 
    "the-matrix-of-time", 
    "the-moonbase", 
    "the-pyramid-of-mars", 
    "time-distortion",
    "two-streams-facility", 
    "unit-headquarters",
]; // Copy of the planes array

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
randomizeButton.addEventListener("click", () => {
    const randomPlane = getRandomPlane();
    const imageUrl = `https://github.com/jenavieve-layosa/mtg-planes-display/raw/main/images/${randomPlane}.jpg`;

    // Set the image source directly
    planeImage.src = imageUrl;

    // Display the plane name
    const planeNameElement = document.getElementById("plane-name");
    planeNameElement.textContent = `Selected Plane: ${randomPlane}`;
});

// Initial random plane on page load
randomizeButton.click();

// https://jenavieve-layosa.github.io/mtg-planes-display
