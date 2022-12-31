const first = document.querySelector('#number1')
const second = document.querySelector('#number2')
const Btn = document.querySelector('#calc')

const result = document.querySelector('#result')

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

Btn.onClick = () => {

  result.innerText = GCD(first.value, second.value)

}
