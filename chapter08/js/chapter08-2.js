const seed = document.querySelector('#seed')
const total = document.querySelector('#total')
const rafle = document.querySelector('#raffle')
const result = document.querySelector('#result')

rafle.addEventListener("click", (e) => {
    var getter = []
    result.classList.add('show')

    for (var i = 0 ; i < total.value; i++){
        getter.push(Math.floor( Math.random() * seed.value)+1)
    
    }

    result.innerHTML = `당범자 :  ${getter}`

    e.preventDefault()
})