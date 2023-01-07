const btn = document.querySelector('button')
const result = document.querySelector('#result')

btn.onclick = (e) => {
    const number = new Set()
    for( var i = 0 ; i < 6 ; i++){
        number.add(Math.round(Math.random() * 45) + 1)
    }
    let [...lotto] = number
    result.innerHTML = lotto
} 