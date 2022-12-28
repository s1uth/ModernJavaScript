

const inputNum = prompt("숫자를 입력해주세요")

const identify = (props) =>{
    if(props<0){
        alert(props + "는 음수입니다.")
    }else if(props>0){
        alert(props + "는 양수입니다.")
    }else{
        alert("0 입니다.")
    }
}

if(isNaN(inputNum)){

    inputNum = prompt("숫자를 입력해주세요")

}
else{

    identify(inputNum)
    
}
