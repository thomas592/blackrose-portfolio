/* =========================================
   BLACK ROSE PORTFOLIO
   JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Black Rose Portfolio iniciado.");

    /*
        Cambia automáticamente el año
        del footer.
    */

    const year = document.querySelector(".copyright");

    if (year) {

        const currentYear = new Date().getFullYear();

        year.textContent =
            `© ${currentYear} Black Rose`;

    }


    /*
        Animación sencilla al entrar
        en las secciones.
    */

    const elements = document.querySelectorAll(
        ".skill, .project, .gallery img, .music-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


    elements.forEach((element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(element);

    });

});
