const url = "https://dummyjson.com/quotes"
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const nRandom = Math.floor(Math.random() * 30)
    quote.innerHTML = data.quotes[nRandom].quote
    author.innerHTML = `-${data.quotes[nRandom].author}-`
    
  })
  .catch(error => console.log(error))