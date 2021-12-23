var toggle = 0;

function ani() {
    console.log(toggle);


    if (toggle == 0) {
        document.getElementById('tagline').classList.remove('animate_slideOut');
        document.getElementById('tagline').classList.add('animate_slideIn');
        toggle = 1;
        console.log(toggle);
        return

    }

    if (toggle == 1) {
        document.getElementById('tagline').classList.remove('animate_slideIn');
        document.getElementById('tagline').classList.add('animate_slideOut');
        toggle = 0;
        console.log(toggle);
        return

    }

}