document.addEventListener("keydown", logKey);

function playMyAudioFile(pathToFile) {
    let audio = document.createElement("AUDIO");
    if (audio.canPlayType("audio/mp3")) {
        audio.setAttribute("src", pathToFile);
        console.log(`Audio object can play mp3.`)
    } else {
        console.log(`Audio object can't play mp3!`);
    }
    audio.setAttribute("controls", "controls");
    document.body.appendChild(audio);
    audio.play();
}

function logKey(event) {
    switch (event.key) {
        case "a":
            // let audio = new Audio("media/Α.mp3");
            //playAudio("media/Α.mp3");
            playMyAudioFile("media/A.mp3");
            break;
        case "s":
            playMyAudioFile("media/S.mp3");
            break;
        case "d":
            playMyAudioFile("media/D.mp3");
            break;
        case "f":
            playMyAudioFile("media/F.mp3");
            break;
        case "g":
            playMyAudioFile("media/G.mp3");
            break;
        case "h":
            playMyAudioFile("media/H.mp3");
            break;
        case "j":
            playMyAudioFile("media/J.mp3");
            break;
            // console.log(`The '${event.key.toUpperCase()}' is pressed.`);
        default:
            console.log(`Unexpected key was pressed.`);
            break;
    }
    // console.log(`code: ${event.code}, key: ${event.key}`);
}
