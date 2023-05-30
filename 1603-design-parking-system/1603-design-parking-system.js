/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */

//big = 1
//medium = 2
//small = 3

var ParkingSystem = function(big, medium, small) {
    
    this.bigSpaces = big
    this.medSpaces = medium
    this.smallSpaces = small
    
    
}

console.log(new ParkingSystem(1,1,0))

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if (carType === 1 && this.bigSpaces > 0) {
        this.bigSpaces--
        return true
    } else if (carType === 2 && this.medSpaces > 0) {
        this.medSpaces--
        return true
    } else if (carType === 3 && this.smallSpaces > 0) {
        this.smallSpaces--
        return true
    } else {
        return false
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */