const planes = [
    "academy-at-tolaria-west",
    "agyrem",
    "akoum",
    "amys-home",
    "antartic-research-base",
    "aplan-mortarium",
    "aretopolis",
    "astral-arena",
    "bad-wolf-bay",
    "bant", 
    "besieged-viking-village",
    "bloodhill-bastion", 
    "bowie-base-one",
    "caught-in-a-parallel-universe",
    "celestine-reef",
    "cliffside-market",
    "chaotic-aether",
    "city-of-the-daleks",
    "cliffside-market",
    "coal-hill-school", 
    "dalek-intensive-care",
    "edge-of-malacol",
    "eloren-wilds",
    "enigma-ridges",
    "esper",
    "feeding-grounds",
    "fields-of-summer",
    "fixed-point-in-time",
    "furnace-layer", 
    "gardens-of-tranquil-repose",
    "gavony", 
    "ghirapur",
    "glen-elendra",
    "glimmervoid-basin",
    "goldmeadow",
    "grand-ossuary",
    "grixis",
    "grove-of-the-dreampods",
    "hedron-fields-of-agadeem",
    "horizon-boughs",
    "hotel-of-fears",
    "human-time-lord-meta-crisis",
    "immersturm",
    "inys-haen", 
    "isle-of-vesuva",
    "izzet-steam-maze",
    "jund",
    "kerblam-warehouse",
    "kessig",
    "ketria",
    "kharasha-foothills",
    "kilnspire-district",
    "krosa", 
    "lair-of-the-ashen-idol",
    "lake-silencio",
    "lethe-lake",
    "littjara",
    "llanowar",
    "megaflora-jungle",
    "minamo", 
    "mirrored-depths",
    "mondassian-colony-ship", 
    "morphic-tide",
    "mount-keralia",
    "murasa",
    "mutual-epiphany", 
    "naar-isle",
    "naktamun",
    "naya",
    "nephalia",
    "new-argive",
    "new-new-york", 
    "norns-dominion",
    "norns-seedcore",
    "north-pole-research-base",
    "nyx",
    "onakke-catacomb", 
    "ood-sphere", 
    "orochi-colony",
    "orzhova",
    "otaria",
    "paliano",
    "panopticon",
    "pompeii", 
    "pools-of-becoming",
    "prahv",
    "prime-ministers-cabinet-room",
    "quicksilver-sea",
    "ravens-run",
    "reality-shaping", 
    "riptide-island",
    "sanctum-of-serra",
    "sea-of-sand",
    "selesnya-loft-gardens",
    "shiv",
    "singing-towers-of-darillium",
    "skybreen",
    "sokenzan", 
    "spectrox-mines",
    "stairs-to-infinity",
    "stensia",
    // "stormcage-containment-facility",
    "strixhaven",
    "stronghold-furnace",
    // "tardis-bay",
    "takenuma",
    "talon-gates",
    "tazeem",
    "tember-city",
    // "temple-of-atropos",
    "ten-wizards-mountain", 
    "the-aether-flues",
    "the-caldaia",
    // "the-cave-of-skulls",
    // "the-cheetah-planet",
    "the-dark-barony",
    // "the-dining-car",
    "the-doctors-childhood-barn", 
    "the-doctors-tomb", 
    "the-drum-mining-facility",
    "the-eon-fog",
    "the-fertile-lands-of-saulvinia",
    "the-fourth-sphere", 
    "the-golden-city-of-orazca",
    "the-great-aerie",
    "the-great-forest",
    "the-hippodrome",
    "the-lux-foundation-library",
    "the-maelstrom", 
    "the-matrix-of-time", 
    "the-moonbase",
    "the-pit",
    "the-pyramid-of-mars",
    "the-western-cloud",
    "the-wilds",
    "the-zephyr-maze", 
    "time-distortion",
    "towashi",
    "trail-of-the-mage-rings",
    "truga-jungle",
    "turri-island",
    "two-streams-facility", 
    "unit-headquarters",
    "undercity-reaches",
    "unleash-the-flux",
    "unyaro",
    "valors-reach",
    "velis-vel",
    "windriddle-palaces"
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
