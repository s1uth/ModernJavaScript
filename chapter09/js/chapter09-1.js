class Pet {
    constructor(name, color){
        this.name = name
        this.color = color
    }
    run(){
        alert(`${this.name} is running, and color is ${this.color}`)

    }
}

const cheeze = new pet ('cheeze', 'probabley yellow?')

cheeze.run();