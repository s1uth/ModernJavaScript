window.onload = function(){
    const picture = document.querySelector('#pic')

    picture.onmouseover = () => {
        document.querySelector('#pic').src = "./img/pic-6.jpg"
    }
    picture.addEventListener("mouseout", () => {
        document.querySelector('#pic').src = "./img/pic-1.jpg"
    })
}
