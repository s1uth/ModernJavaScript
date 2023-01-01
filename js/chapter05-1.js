const BtnView = document.querySelector('#view')
const contents = document.querySelector('.hidden')


 BtnView.onclick = () => {
    contents.classList.toggle('open')  
}