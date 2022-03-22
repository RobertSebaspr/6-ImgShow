const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');

const loadingImage = (enter, observer) => {
    enter.forEach(enter2 => {
        if (enter2.isIntersecting) {
            enter2.target.classList.add('visible');
        } else {
            enter2.target.classList.remove('visible');
        }
    });
};

const observer = new IntersectionObserver(loadingImage, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
});

observer.observe(image1);
observer.observe(image2);
observer.observe(image3);
observer.observe(image4);
