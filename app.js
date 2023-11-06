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
    "caught-in-a-parallel-universe", 
    "chaotic-aether",
    "city-of-the-daleks",
    "cliffside-market",
    "coal-hill-school", 
    "dalek-intensive-care",
    "edge-of-malacol",
    "enigma-ridges",
    "fields-of-summer",
    "fixed-point-in-time",
    "furnace-layer", 
    "gardens-of-tranquil-repose",
    "gavony", 
    "glen-elendra",
    "grand-ossuary",
    "hotel-of-fears",
    "human-time-lord-meta-crisis",
    "inys-haen", 
    "kerblam-warehouse",
    "krosa", 
    "lake-silencio",
    "llanowar",
    "littjara",
    "minamo", 
    "mondassian-colony-ship", 
    "morphic-tide",
    "Mount-keralia",
    "mutual-epiphany", 
    "naar-isle",
    "new-new-york", 
    "north-pole-research-base", 
    "ood-sphere", 
    "pompeii", 
    "prime-ministers-cabinet-room",
    "reality-shaping", 
    "sea-of-sand",
    "singing-towers-of-darillium", 
    "spectrox-mines", 
    "the-aether-flues",
    "the-doctors-childhood-barn", 
    "the-doctors-tomb", 
    "the-drum-mining-facility",
    "the-eon-fog",
    "the-fertile-lands-of-saulvinia", 
    "the-golden-city-of-orazca",
    "the-lux-foundation-library", 
    "the-matrix-of-time", 
    "the-moonbase", 
    "the-pyramid-of-mars", 
    "time-distortion",
    "towashi",
    "two-streams-facility", 
    "unit-headquarters",
    "undercity-reaches",
    "unleash-the-flux",
    "velis-vel",


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

    // Display the plane name
    const planeNameElement = document.getElementById("plane-name");
    planeNameElement.textContent = `Selected Plane: ${randomPlane}`;
});

// Initial random plane on page load
randomizeButton.click();

// https://jenavieve-layosa.github.io/mtg-planes-display
