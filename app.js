const planes = [
    "amy's home",
    "antartic research base",
    "aplan mortarium",
    "bad wolf bay", 
    "beseiged viking village", 
    "bowie base one", 
    "chaotic aether",
    "city of the daleks",
    "coal hill school", 
    "dalek intensive care", 
    "gardens of tranquil repose", 
    "hotel of fears", 
    "kerblam! warehouse", 
    "lake silencio", 
    "mondassian colony ship", 
    "mutual epiphany", 
    "new new york", 
    "north pole research", 
    "ood sphere", 
    "pompeii", 
    "prime miniter's cabinet room", 
    "singing towers of darillium", 
    "spectrox mines", 
    "the doctor's childhood barn", 
    "the doctor's tomb", 
    "the drum, mining facility", 
    "the lux foundation library", 
    "the matrix of time", 
    "the moonbase", 
    "the pyramid of mars", 
    "two streams facility", 
    "unit headquarters",
    // add more later 

];

const planeImage = document.getElementById("plane-image");
const randomizeButton = document.getElementById("randomize-button");

randomizeButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * planes.length);
    const randomPlane = planes[randomIndex];
    const imageUrl = `https://github.com/jenavieve-layosa/mtg-plane-display/blob/main/images/${randomPlane}.jpg`;

    planeImage.src = imageUrl;
});

// Initial random plane on page load
randomizeButton.click();
// https://jenavieve-layosa.github.io/mtg-planes-display