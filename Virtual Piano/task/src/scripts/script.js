document.addEventListener("keydown", logKey);

function playMyAudioFile(pathToFile) {
    let audio = document.createElement("AUDIO");
    if (audio.canPlayType("audio/mp3")) {
        audio.setAttribute("src", pathToFile);
        console.log(`Audio object can play mp3.`)
    } else {
        console.log(`Audio object can't play mp3!`);
    }
    //audio.setAttribute("controls", "controls");
    //document.body.appendChild(audio);
    audio.play();
}

function logKey(event) {
    switch (event.key) {
        // white keys
        case "a":
        case "s":
        case "d":
        case "f":
        case "g":
        case "h":
        case "j":
        // black keys
        case "w":
        case "e":
        case "t":
        case "y":
        case "u":
            playMyAudioFile(`media/${event.key.toUpperCase()}.mp3`);
            break;
        case "z": // For german keyboard
            playMyAudioFile(`media/Y.mp3`);
            break;

            // console.log(`The '${event.key.toUpperCase()}' is pressed.`);
        default:
            console.log(`Unexpected key was pressed.`);
            break;
    }
    // console.log(`code: ${event.code}, key: ${event.key}`);
}
