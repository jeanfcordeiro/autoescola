
var radio = document.querySelector('.manual-btn');
var cont = 1;

document.getElementById('radio1').checked = true;

setInterval(() => {
    nextImage();
}, 5000)

    function nextImage() {
        cont++;
        if (cont > 3) {
            cont = 1;
        }
        document.getElementById('radio' + cont).checked = true;
    }