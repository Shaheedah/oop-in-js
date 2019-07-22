//Assignment 1
class Person{
    constructor(name, surname, age, gender, interests){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    say(){
        console.log("Hello I'm " + personOne.name);
        
        console.log("I am " + personTwo.name + personTwo.surname + "I am" + personTwo.age +
                  "years old my interests are" + personTwo.interests);    
            
            }
            
    }
 var personOne = new Person("Nosipho", "Masondo", 8, "Female", "Dancing, Singing");
 var personTwo = new Person("Thando", "Ngwane", 16, "Male", "playing games and drawing");
 
 personOne.say();
 personTwo.say();

