const SOUNDS_DIR = "sounds";
const sounds = [
  { name: "Chika Chikaaa", file: "chica.mp3" },
  { name: "BOW BOW", file: "bowbow.mp3" },
  { name: "oh yeah", file: "oh_yeah.mp3" },
  { name: "OHH YEAH", file: "ohhhh_yeah.mp3" },
  {
    name: "SCREAMING",
    file: "screaming.wav",
  },
  { name: "Boo", file: "boo.mp3" },
  { name: "Laughing", file: "laugh.mp3" },
];

const container = document.getElementById("buttonContainer");

sounds.forEach((sound, index) => {
  const button = document.createElement("button");
  button.textContent = sound.name;
  button.addEventListener("click", () => {
    const audio = new Audio(`${SOUNDS_DIR}/${sound.file}`);
    audio.play();
  });
  container.appendChild(button);
});
