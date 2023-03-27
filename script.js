const images = document.querySelectorAll('.image')
const imgList = Array.from(images)
const imageContainer = document.querySelector('.picContainer')

imageContainer.addEventListener('mouseover', function(e) {
    const num = Number(e.target.dataset.num)
    if (e.target.classList.contains('image')) {
        images[num].classList.add('hovered')
    }

})
imageContainer.addEventListener('mouseout', function(e) {
    const num = Number(e.target.dataset.num)
    if (e.target.classList.contains('image')) {
        images[num].classList.remove('hovered')
    }
})