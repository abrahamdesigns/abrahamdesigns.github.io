let theme = localStorage.getItem('theme');
// let theme = 'dark';

window.onload = function() {
    if (theme === null) {
        theme = 'light';
        localStorage.setItem('theme', theme)
    }

    document.body.className = `theme-${theme}`;
    document.getElementById('switch').checked = (theme === 'dark');
}


console.log(theme);

function changeTheme() {
    if (theme === 'light') {
        theme = 'dark';
    } else {
        theme = 'light';
    }

    document.body.className = `theme-${theme}`;
    localStorage.setItem('theme', theme)
}

window.addEventListener('scroll', function () {
    const scrollIndicator = document.querySelector('.scroll-downs');
    
    if (window.scrollY > 0) {
        // Fade out the scroll indicator when scrolling
        scrollIndicator.style.opacity = 0;
    } else {
        // Show the scroll indicator when at the top of the page
        scrollIndicator.style.opacity = 1;
    }
})

document.addEventListener('DOMContentLoaded', function(event) {
    // array with texts to type in typewriter
    var dataText = ["Visual Designer.", "UX Designer.", "Graphic Designer."];
    
    // type one text in the typewriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // check if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.querySelector("h5").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }

    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (i >= dataText.length) {
            i = 0; // reset to 0 to loop the text
        }

        // check if dataText[i] exists
        if (typeof dataText[i] !== 'undefined') {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function() {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }

    // start the text animation
    StartTextAnimation(0);
});

