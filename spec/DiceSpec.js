describe("dice", function() {
	it("should make a die that has six sides",function() {
		let dicefactory = new DiceFactory();
		dicefactory.makeDie();
		expect(dicefactory.sixSidedDice.length).toEqual(6);
	});
    
	it("should return true if dice is fair",function() {
		let dicetester = new DiceTester();
		expect(dicetester.testDie()).toBeTruthy();
	});
});

