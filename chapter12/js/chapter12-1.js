const link = "https://reqres.in/api/products/10"
const result = document.querySelector('#result')

let xhr = new XMLHttpRequest()
xhr.open('GET', link)
xhr.send()

xhr.onreadystatechange = function(){
    if (xhr.readvState === 4 & xhr.status === 200 ) {
    let product = JSON.parse(xhr.responseText)
    const Dname = product.data.name
    const Dinfo = product.data.year

    result.innerHTML = 
    `<p class="product" >상품명 : ${Dname}</p>
     <p class="product" >생산년도 : ${Dinfo}</p>`
    }
    
}