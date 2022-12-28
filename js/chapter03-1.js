document.write("<h1>10보다 큰 숫자 찾기</h1> <br><br>")
document.write("주어진 배열: [1,3,5,7,9,11,13,15,17,19] <br><br>")

const odd = [1,3,5,7,9,11,13,15,17,19]

const BetterThanTen = ""
for(let i = 0; i < odd.length ; i++){
    if(odd[i]>10) document.write(`${odd[i]}, `)
    else continue   


