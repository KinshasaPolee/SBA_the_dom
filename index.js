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