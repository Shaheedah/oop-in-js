//assignment 2
class DiceFactory{
    constructor(){
        this.sixSidedDice = [];
    };
    makeDie(){
        for(let i = 1; i < 7; i++){
            this.sixSidedDice.push(i);
        };
        let dice = this.sixSidedDice;
        return dice;
    };
};

class DiceTester{
	testDie(){
		let dicefactory = new DiceFactory();
		dicefactory.makeDie();
		dicefactory.sixSidedDice.push(9)
		for(let i = 1; i < dicefactory.sixSidedDice.length; i++){
			if(dicefactory.sixSidedDice[i - 1] != i){
				throw new Error("dice not fair")
			};
		};
		return true;
	};
};
let dicetester = new DiceTester();
dicetester.testDie();