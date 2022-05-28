// class Dog {
//     constructor(weight, height, color) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//     }
// }
//
// const rex = new Dog(
//     10,
//     50,
//     "black"
// )
// const sharik = new Dog(
//     5,
//     25,
//     "pink"
// )
//
// console.log(rex)

class Animal {
    constructor(type, gender, color, voiceText) {
        this.type = type;
        this.gender = gender;
        this.color = color;
        this.voiceText = voiceText;
    }

    voice(){
        console.log(this.voiceText)
    }
}

class Bear extends Animal {
    constructor(type, gender, color, voiceText, height, weight) {
        super(type, gender, color, voiceText);
        this.height = height;
        this.weight = weight;
    }

    purpose(){
        console.log(`Bear height: ${this.height}\nweight: ${this.weight}`)
    }
}

const Misha = new Bear(
    "wild",
    "male",
    "white",
    "aaa",
    2,
    300
)
console.log(Misha)
Misha.purpose()