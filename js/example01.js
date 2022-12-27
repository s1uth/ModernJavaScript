const inch = prompt("숫자를 입력하세요")

if(isNaN(inch)){

    inch = prompt("숫자를 입력하세요")

}else{

    const cm = inch * 2.54
    document.write(cm)
    
}