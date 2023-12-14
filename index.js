document.addEventListener('DOMContentLoaded', function () {
    const videoContainer = document.getElementById('video-container');
    const loadVideoBtn = document.getElementById('loadVideoBtn');
    const setBgImageBtn = document.getElementById('setBgImageBtn');
    const bgImageInput = document.getElementById('bgImageInput');

    const videoElement = document.createElement('iframe');
    videoElement.width = '560';
    videoElement.height = '315';
    videoElement.src = 'https://youtu.be/KdJ-Qwu3y4Y?si=bdn7ZDP3mSYiZ31_';
    videoElement.title = 'Victoria Monet Video';
    videoElement.allowFullscreen = true;

    loadVideoBtn.addEventListener('click', function () {

        if (!videoContainer.hasChildNodes()) {
            videoContainer.appendChild(videoElement);
        }
    });
    videoElement.addEventListener('mouseover', function () {
        videoContainer.style.backgroundColor = '#f0f0f0';
    });

    videoElement.addEventListener('mouseout', function () {
        videoContainer.style.backgroundColor = '#ffffff';
    });

    setBgImageBtn.addEventListener('click', function () {
        const imageUrl = bgImageInput.value;
        document.body.style.backgroundImage = "url('image/victoria_monet_photo.jpg')";
    });

    console.log('Window width:', window.innerWidth);
    console.log('Document URL:', document.URL);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Enter your email';
    emailInput.required = true;

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';

    const form = document.createElement('form');
    form.appendChild(emailInput);
    form.appendChild(submitBtn);

    document.body.appendChild(form);

    submitBtn.addEventListener('click', function (event) {
        event.preventDefault();

        if (emailInput.checkValidity()) {
            alert('Form submitted successfully!');
        } else {
            alert('Please enter a valid email address.');
        }
    });
});