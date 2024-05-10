// defines ShapeS class, all extentions share color property
class Shapes {
    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = color
    }
}

// defines Triangle class, extention of Shapes, with points for corners
class Triangle extends Shapes {
    constructor() {
        super();
        this.points = "150, 18 244, 182 56, 182"; // Define points for triangle corners
    }

    render() {
        return `<polygon points="${this.points}" fill="${this.color}"/>`; // Use points and color
    }
}


// defines Circle class, extention of Shapes, with midpoint for center, and fills the vp
class Circle extends Shapes {
    constructor() {
        super();
        this.points = `cx="50%" cy="50%" r="100" height="100%" width="100%"`;
    }
    render(){
        return `<circle ${this.points} fill="${this.color}"/>`
    }
}

// defines the Square class, extention of Shapes, x value for base reference and height and with of 200px
class Square extends Shapes {
    constructor() {
        super();
        this.points = `x="50" height="200" width="200"`
    }
    render(){
        return `<rect ${this.points} fill="${this.color}"/>`
    }
}

module.exports = {Circle, Square, Triangle}