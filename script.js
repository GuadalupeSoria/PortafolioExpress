
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const formulario = document.getElementById("formulario");
    const btnArriba = document.getElementById("btn-arriba");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btnArriba.style.display = "block";
        } else {
            btnArriba.style.display = "none";
        }
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > navbar.offsetHeight) {
            navbar.classList.add("fixed");
        } else {
            navbar.classList.remove("fixed");
        }
    });

    window.addEventListener("scroll", function () {
        if (isElementInViewport(formulario)) {
            formulario.style.visibility = "visible";
        }
    });

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    btnArriba.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    const portada = document.getElementById('portada');
  const videoContainer = document.querySelector('.rectangulo');

  portada.addEventListener('click', () => {
    portada.style.display = 'none';
    videoContainer.style.display = 'block';
  });

  const videoWrapper = document.getElementById('videoWrapper');
  const video = document.getElementById('video');

  videoWrapper.addEventListener('click', () => {
    videoWrapper.removeChild(videoWrapper.querySelector('img'));
    video.style.display = 'block'
    video.play()
  });

    

});
