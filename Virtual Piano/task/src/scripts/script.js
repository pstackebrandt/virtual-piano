// const element = document.getElementsByTagName("body");
document.addEventListener("keydown", logKey);

function logKey(event) {

    if (event.key === "a") {
        console.log(`key: ${event.key}`)
    }

    switch (event.key) {
        case "a":
        case "s":
        case "d":
        case "f":
        case "g":
        case "h":
        case "j":
            console.log(`The ${event.key.toUpperCase()} is pressed.`);
            break;
        default:
            console.log(`Unexpected key was pressed.`);
            break;
    }
    // console.log(`code: ${event.code}, key: ${event.key}`);
}
