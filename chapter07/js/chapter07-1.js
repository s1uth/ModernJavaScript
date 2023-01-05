const name = document.querySelector('#username')
const major = document.querySelector('#major')
const save = document.querySelector('form > button')
const attendant = document.querySelector('tbody')

save.addEventListener ('click',(e) =>{
    e.preventDefault()
    const item = document.createElement('tr')
    item.innerHTML = `<th>${name.value}</th><th>${major.value}</th>`
    attendant.appendChild(item)
    name.value = ""
    major.value = ""
})