
const {Circle, Triangle, Square} = require('./shapes');


describe('Shapes', () => {
    const blue = 'blue';
    // runs test for triangle if it can be rendered correctly, with color set to blue
    describe('Triangle', () => {
        it('should render triangle with the color blue', () => {
            const shape = new Triangle();
            shape.setColor('blue');

            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
    //runs test for Circle if it can be rendered correctly, with color set to blue
    describe('Circle', () => {
        it('should render circle with the color blue', () => {
            const shape = new Circle();
            shape.setColor(blue);

            expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue"/>`);
        })
    })
    //runs test for square if it can be rendered correctly, with color set to blue
    describe('Square', () => {
        it('should render Square with the color blue', () => {
            const shape = new Square();
            shape.setColor(blue);

            expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="blue"/>`);
        })
    })
})