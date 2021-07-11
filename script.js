function generateString() {

    // Generate String for random link

    let strRandom = '';
    let strChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
        strRandom += strChar.charAt(Math.floor(Math.random() * strChar.length));
    }
    return strRandom;
}

function generateImages() {

    // Add img in html and set link imgur

    let boxImages = document.getElementById('box-images');
    boxImages.innerText = '';
    let amount = document.getElementById("number").value;

    for (let i = 0; i < amount; i++) {
        let gString = generateString();
        let linkRandom = "https://i.imgur.com/" + gString + ".png";
        let imgNew = document.createElement("img");
        let pNew = document.createElement("p");
        pNew.innerHTML = "https://i.imgur.com/" + gString + ".png"
        imgNew.setAttribute('src', linkRandom);

        // Case img == 161: generate new image, but 161px image is removed.png from imgur

        imgNew.onload = function () {
            if (this.width == 161) {
                gString = generateString();
                imgNew.setAttribute('src', "https://i.imgur.com/" + gString + ".png");
                pNew.innerHTML = "https://i.imgur.com/" + gString + ".png";
            } else {
                boxImages.insertBefore(imgNew, boxImages.firstElementChild);
                boxImages.insertBefore(pNew, boxImages.firstElementChild);
            }
        }
    }
}

