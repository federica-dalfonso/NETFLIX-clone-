//carousel:
let items = document.querySelectorAll(".carousel");

items.forEach((item) => {
    let slides = item.querySelectorAll(".carousel-item");
    let firstSlide = slides[0];
    slides.forEach((element) => {
        const minPerSlide = 6;
        let next = element.nextElementSibling;
        for (let i = 1; i < minPerSlide; i++) {
            if (!next) {
                next = firstSlide;
            }
            let cloneChild = next.cloneNode(true);
            element.appendChild(cloneChild.children[0]);
            next = next.nextElementSibling;
        }
    })
})

//scale animation:
let movies = document.querySelectorAll(".card");

for (film of movies) {
    film.addEventListener ("mouseenter", (event) => {
        film.offsetWidth;
        event.target.classList.add("zoom-in");
    });
    film.addEventListener ("mouseleave", (event) => {
        film.offsetWidth;
        event.target.classList.remove("zoom-in");
    });
}
