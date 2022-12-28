document.write("<h1>인치를 센티미터로</h1>")

const inch = prompt("숫자를 입력하세요")

if(isNaN(inch)){

    inch = prompt("숫자를 입력하세요")

}else{

    const cm = inch * 2.54
    document.write(cm)
    
}