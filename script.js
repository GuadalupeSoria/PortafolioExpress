
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

const proyectos = [
    {
        id: 1,
        titulo: 'Proyecto 1',
        imagen: './assets/CHAOSLOGO.png',
        descripcion: 'Descripción detallada del Proyecto 1..asd.',
        otraImagen: './assets/BackLanding.jpg'
    },
    {
        id: 2,
        titulo: 'Proyecto 2',
        imagen: 'imagen-proyecto2.jpg',
        descripcion: 'Descripción detallada del Proyecto 2...',
        otraImagen: 'otra-imagen2.jpg'
    },
   
    {  id: 3,
        titulo: 'Proyecto 3',
        imagen: 'imagen-proyecto3.jpg',
        descripcion: 'Descripción detallada del Proyecto 3...',
        otraImagen: 'otra-imagen3.jpg'},

    {  id: 4,
        titulo: 'Proyecto 4',
        imagen: 'imagen-proyecto4.jpg',
        descripcion: 'Descripción detallada del Proyecto 4...',
        otraImagen: 'otra-imagen4.jpg'
        },
];

function mostrarDetalle(proyectoId) {
    const proyectoSeleccionado = proyectos.find(proyecto => proyecto.id === proyectoId);

    if (proyectoSeleccionado) {
        // Actualiza la información del detalle del proyecto
        document.getElementById('imagenProyectoDetalle').style.backgroundImage = `url(${proyectoSeleccionado.imagen})`;
        document.getElementById('textoProyectoDetalle').innerText = proyectoSeleccionado.descripcion;

        if (proyectoSeleccionado.otraImagen) {
            document.getElementById('otraImagenDetalle').style.backgroundImage = `url(${proyectoSeleccionado.otraImagen})`;
        } else {
            // Si no hay otra imagen, oculta el contenedor
            document.getElementById('otraImagenDetalle').style.display = 'none';
        }
    }

    document.getElementById('detalle-proyecto').style.display = 'flex';
}

// Resto del código...

function cerrarDetalle() {
    // Restaura el contenido predeterminado y oculta la ventana emergente
    document.getElementById('imagenProyectoDetalle').style.backgroundImage = '';
    document.getElementById('otraImagenDetalle').style.backgroundImage = '';
    document.getElementById('otraImagenDetalle').style.display = 'block'
    document.getElementById('textoProyectoDetalle').innerText = '';
    document.getElementById('detalle-proyecto').style.display = 'none';
}

function scrollHorizontal(amount) {
    const container = document.querySelector('.proyectos-container');
    container.scrollBy({ left: amount, behavior: 'smooth' });
}

