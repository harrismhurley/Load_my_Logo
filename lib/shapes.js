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
    render(){
        return `<polygon points="0,0 300,0 150,300" fill="${this.color}"/>`
    }
}

// defines Circle class, extention of Shapes, with midpoint for center, and fills the vp
class Circle extends Shapes {
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
    }
}

// defines the Square class, extention of Shapes, x value for base reference and height and with of 200px
class Square extends Shapes {
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}">`
    }
}

module.exports = {Circle, Square, Triangle}