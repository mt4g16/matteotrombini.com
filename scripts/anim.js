
var toggle = 0;
var toggle2 = 1;


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

function fade() {


    if (toggle2 == 0) {
        document.getElementById('project_buttons').classList.remove('animate_fadeIn');
        document.getElementById('project_buttons').classList.add('animate_fadeOut');
        document.getElementById("project_buttons").style.opacity = 0;
        toggle2 = 1;
        console.log(toggle);
        return

    }

    if (toggle2 == 1) {
        document.getElementById('project_buttons').classList.remove('animate_fadeOut');
        document.getElementById('project_buttons').classList.add('animate_fadeIn');
        document.getElementById("project_buttons").style.opacity = 1;

        toggle2 = 0;
        console.log(toggle);
        return

    }

}

function fadeBlurb() {


    if (toggle2 == 0) {
        document.getElementById('project_buttons').classList.remove('animate_fadeIn');
        document.getElementById('project_buttons').classList.add('animate_fadeOut');
        document.getElementById("project_buttons").style.opacity = 0;
        toggle2 = 1;
        console.log(toggle);
        return

    }

    if (toggle2 == 1) {
        document.getElementById('project_buttons').classList.remove('animate_fadeOut');
        document.getElementById('project_buttons').classList.add('animate_fadeIn');
        document.getElementById("project_buttons").style.opacity = 1;

        toggle2 = 0;
        console.log(toggle);
        return

    }

}