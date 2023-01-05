const box = document.querySelector('#noti-box')
const btn = document.querySelector('#bttn')

btn.addEventListener("click", (e) => {
    const noti = document.createElement('div')
    noti.classList.add('noti')
    noti.innerText = "알림이 표시 됩니다."
    box.appendChild(noti)

    setTimeout(()=>box.removeChild(noti),3000)
})