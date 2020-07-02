const fullImg = document.querySelector('.full-image');
const preview = document.querySelectorAll('.gallary-container img');

preview.forEach(pre => {
    pre.addEventListener('click', (e) => {
        const imgSrc = pre.getAttribute('src');
        fullImg.src = imgSrc;
    })
}); 