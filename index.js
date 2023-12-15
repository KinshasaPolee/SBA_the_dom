let navLinks = document.getElementById('top_menu').getElementsByTagName('a');

for ( let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.color = 'white';
}

let dynamicHeader = document.querySelector('h1').style.color = 'white';
dynamicHeader.style.position = absolute;
dynamicHeader.style.top = '10px';
dynamicHeader.style.left = '50px';

let newDiv = document.createElement('div');
let newParagraph = document.createElement('p');
newParagraph.textContent = 'Home';

newDiv.appendChild(newParagraph);
document.body.appendChild(newDiv);

function createTemplate() {
    // Create a DocumentFragment
    let fragment = document.createDocumentFragment();

    // Create a template element
    let template = document.createElement('template');
    
    // Set the content of the template (this can include HTML markup)
    template.innerHTML = '<p>Music is life!</p>';

    // Clone the template content using cloneNode
    let clone = template.content.cloneNode(true);

    // Append the cloned content to the DocumentFragment
    fragment.appendChild(clone);

    // Get the container element where you want to insert the templated content
    let container = document.getElementById('template-container');

    // Append the DocumentFragment to the container
    container.appendChild(fragment);
}

  // Call the function to create and insert the templated content
createTemplate();


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