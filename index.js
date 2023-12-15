let navLinks = document.getElementById('top_menu').getElementsByTagName('a');

for ( let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.color = 'white';
}

let dynamicHeader = document.querySelector('h1').style.color = 'white';
// dynamicHeader.style.position = absolute;
// dynamicHeader.style.top = '10px';
// dynamicHeader.style.left = '50px';

let newDiv = document.createElement('div');
let newParagraph = document.createElement('p');
newParagraph.textContent = 'Home';

newDiv.appendChild(newParagraph);
document.body.appendChild(newDiv);

function createTemplate() {
    let fragment = document.createDocumentFragment();
    let template = document.createElement('template');

    template.innerHTML = '<p></p>';

    let clone = template.content.cloneNode(true);
    fragment.appendChild(clone);

    let container = document.getElementById('template-container');
    container.appendChild(fragment);
}

createTemplate();

function scrollToSection(sectionId) {
    // Get the target section
    var targetSection = document.getElementById(sectionId);

    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: 'smooth' });
}


// function onYouTubeIframeAPIReady() {
//     var player = new YT.Player('youtube-video-container', {
//         videoId: 'https://www.youtube.com/watch?v=KdJ-Qwu3y4Y',
//         width: 640,
//         height: 360,
//         playerVars: {
//             autoplay: 1,
//             controls: 1,
//             modestbranding: 1,
//             rel: 0,
//         },
//     });
// }

// var tag = document.createElement('script');
// tag.src = 'https://www.youtube.com/iframe_api';
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var videoIframe = document.getElementById('youtube-video');

//     videoIframe.style.position = 'absolute';
//     videoIframe.style.left = '20%';
//     videoIframe.style.top = '20vh';