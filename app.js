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


let planeIndex = 0; // Track the current index in the shuffled array

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(planes); // Shuffle the array

const planeImage = document.getElementById("plane-image");
const randomizeButton = document.getElementById("randomize-button");
const forwardButton = document.getElementById("forward-button");
const backwardButton = document.getElementById("backward-button");

function displayPlane(index) {
    const imageUrl = `https://github.com/jenavieve-layosa/mtg-planes-display/raw/main/images/${randomPlane}.jpg`;
    planeImage.src = imageUrl;
}

randomizeButton.addEventListener("click", () => {
    displayPlane(planeIndex);
});

forwardButton.addEventListener("click", () => {
    planeIndex = (planeIndex + 1) % planes.length; // Move forward in the array
    displayPlane(planeIndex);
});

backwardButton.addEventListener("click", () => {
    planeIndex = (planeIndex - 1 + planes.length) % planes.length; // Move backward in the array
    displayPlane(planeIndex);
});

// Initial display of the first plane on page load
displayPlane(planeIndex);


// https://jenavieve-layosa.github.io/mtg-planes-display

