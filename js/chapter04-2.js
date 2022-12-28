document.write("<h1>두 수의 최대 공약수 구하기</h1>")

const inputNum1 = prompt('첫 번째 수를 입력해주세요')
const inputNum2 = prompt('두 번째 수를 입력해주세요')

const GCD = (Num1, Num2) => {

    Num1 = parseInt(Num1)
    Num2 = parseInt(Num2)

    while(true){

        if (Num1 > Num2){

            if((Num1 % Num2) === 0){
                return Num2
            }else{
                Num1 = Num1 % Num2
            }
    
        }else if(Num1 < Num2){
    
            if((Num2 % Num1) === 0){
                return Num1
            }else{
                Num2 = Num2 % Num1
            }
    
        }else{
            return Num1
        }

    }

}

if(isNaN(inputNum1) || isNaN(inputNum2)){

    const inputNum1 = prompt('첫 번째 수를 입력해주세요')
    const inputNum2 = prompt('두 번째 수를 입력해주세요')

}else{

    console.log(inputNum1 + "과 " + inputNum2 +"의 최대공약수 : " + GCD(inputNum1, inputNum2))
    
}