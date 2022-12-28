document.write("<h1>주어진 수에서 짝수만 더하기</h1> <br><br>")
document.write("<br><br>")

const input = parseInt(prompt("1보다 큰 수를 입력하세요"))
let num = 0

     
if(input < 1){

    input = parseInt(prompt("1보다 큰 수를 입력하세요"))

}else{

    for(let i = 1; i<= input; i++){
        if(i%2){
            continue
        }
        else{
            num += parseInt(i) 
            document.write(`${i} ------------- ${num}<br>`)
        }
    }
}



