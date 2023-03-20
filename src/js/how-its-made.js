function playVideo() {
    var videoContainer = document.querySelector('.video-container');
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/8MEd5muwtX4?autoplay=1');
    iframe.setAttribute('allowfullscreen', '');
    videoContainer.innerHTML = '';
    videoContainer.appendChild(iframe);
  }