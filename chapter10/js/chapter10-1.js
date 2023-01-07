const origin = document.querySelector('#origin')
const result = document.querySelector('#result')
let first_array = [2,4,6,8,10]


function show(loca, array){
    const table = document.createElement('table')
    array.forEach(value =>{
        const colum = document.createElement('td')

        colum.innnerHTML = `${value}`
        table.appendChild(colum)
    })
    loca.appendChild(table) 
}

show(origin, first_array)
let sum = 0
first_array.forEach(value =>{
    sum = sum + value
})
first_array.push(sum)

show(result, first_array)