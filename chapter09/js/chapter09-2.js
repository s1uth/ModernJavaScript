class Pet {
    constructor(name, color){
        this.name = name
        this.color = color
    }
    run(){
        alert(`${this.name} is running, and color is ${this.color}`)

    }
}

class Cat extends Pet{
    constructor(name, color, breed){
        super(name,color)
        this.breed = breed
    }
    viewInfo(){
        alert(`이름 : ${this.name},   품종 : ${this.breed},   색깔 : ${this.color}`)
    }
}
const cheeze = new Cat("치즈", "치즈 태비", "노랑색")

cheeze.viewInfo()

