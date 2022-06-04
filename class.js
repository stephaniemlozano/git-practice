// //Class

// class Circle {
//     constructor() {
//         this.width = 10
//         this.height = 10
//     }
// }

// const circle1 = new Circle
// const circle2 = new Circle

// console.log(circle1)
// console.log(circle2)


// class Book {
//     constructor (paramTitle, paramYear, paramPage) {
//         this.title = paramTitle
//         this.year = paramYear
//         this.page = paramPage
//     }
// }
// const bookInfo = new Book('The Whole Brain Child', 2019, 151)
// console.log(bookInfo)

// //Inheritance - reuse properties and methods of an existing class. Children class inherit from parent class.

// class Animal {
//     constructor (propCute, propName) {
//         this.animalCute = propCute
//         this.animalName = propName
//     }
// }

// class Fish extends Animal {
//     constructor (animalCute, animalName, propSkinType) {
//         super(animalCute, animalName)

//         this.skinType = propSkinType
//     }
// }


// const cat = new Animal('Yes', 'Coco the Cat')
// const fish = new Fish('Yes', 'Wanda', 'Scales')
// console.log(cat)


// class Animal {
//     constructor (propCute, propName) {
//         this.animalCute = propCute
//         this.animalName = propName
//     }

//     isSleeping() {
//         return `Zzzz yes it is`
//     }
// }

// const cat = new Animal('Yes', 'Coco the Cat')
// console.log(cat.isSleeping)

// Static is a method or property that belongs to a class and not to any one object

// class Animal {
//     static numberOfAnimal = 1

//     constructor(propCute, propName) {
//         this.animalCute = propCute
//         this.animalName = propName
//         this.animalCute.numberOfAnimal += 1
//     }
// }
// const cat = new Animal('Yes', 'Coco the Cat')

// console.log(Animal.numberOfAnimal)

class CarFactory {
    constructor (paramName, paramColor, paramYear, paramType) {
        this.name = paramName
        this.color = paramColor
        this.year = paramYear
        this.type = paramType
    }
    isFast() {
        return 'Vroom vroom!'  
    }
}
const car1 = new CarFactory('Tucson', 'Gray', 2019, 'SUV')
const car2 = new CarFactory('Santa Fe', 'Black', 2021, 'SUV')
const car3 = new CarFactory('Accent', 'Blue', 2015, 'Hatchback')

console.log(car1, car2, car3)