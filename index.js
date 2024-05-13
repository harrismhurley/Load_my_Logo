const inquirer = require('inquirer');
const {Triangle, Square, Circle} = require('./lib/shapes');
const fs = require('fs');

class SVG{
    constructor(){
        this.textSVG = ''
        this.shapeSVG = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeSVG}${this.textSVG}</svg>`
    }
    setText(text,textColor){
        this.textSVG = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    setShape(shape){
        this.shapeSVG = shape.render()

    }
}

// questions for inquirer
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select your desired logo shape',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color (OR hexadecimal number) would you like your shape?'
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'What would you like to name your logo file'
    },
];

function writeFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you made your logo!");
    });
}


async function init() {
    console.log("Starting init");
	var svgString = "";

    // Prompt the user for answers
    const answers = await inquirer.prompt(questions);

    //sets user file name
    var svg_file = `${answers.fileName}.svg`;

	//user text
	var user_text = "";
	if (answers.text.length > 0 && answers.text.length < 4) {
		// 1-3 chars, valid entry
		user_text = answers.text;
	} else {
		// 0 or 4+ chars, invalid entry
		console.log("Enter 1-3 Characters");
        return;
	}
	//user font color
	user_font_color = answers.textColor;
	//user shape color
	user_shape_color = answers.shapeColor;

	//user shape type
	user_shape_type = answers.shape;
	//user shape
	let user_shape;
	if (user_shape_type === "Square") {
		user_shape = new Square();
	}
	else if (user_shape_type === "Circle") {
		user_shape = new Circle();
	}
	else if (user_shape_type === "Triangle") {
		user_shape = new Triangle();
	}
	user_shape.setColor(user_shape_color);

	// Create a new Svg instance and add the shape and text elements to it
	var svg = new SVG();
	svg.setText(user_text, user_font_color);
	svg.setShape(user_shape);
	svgString = svg.render();
	
	//Print shape to log
	console.log("Displaying shape:\n\n" + svgString);
	//document.getElementById("svg_image").innerHTML = svgString;

	console.log("Shape generation complete!");
	console.log("Writing shape to file...");
	writeFile(svg_file, svgString); 
}
init();