window.onload = () => {
    const btn = document.querySelector('#bttn')
    const nav = document.querySelector('#nav')

    btn.onclick = () => {
        btn.classList.toggle('active')
        nav.classList.toggle('active')
    }
}