class Shape {
    constructor(newX,newY) {
        let __x__;
        let __y__;
        
        this.setX = function(x) {
            __x__ = (x>=0)?x:0;
        }
        this.getX = function() {
            return __x__;
        }
        this.setY = function(y) {
            __y__ = (y>=0)?y:0;
        }
        this.getY = function() {
            return __y__;
        }

        this.setX(newX);
        this.setY(newY);
    }
    showPoint() {
        console.log(this.getX() + "," + this.getY())
    }
    createHorizontalOffset(offset) {
        if (offset === undefined)
            offset = this.getX();
        let emptySpace = "";
        for (let i = 0; i<offset; i++) {
            emptySpace += " ";
        }
        return emptySpace;
    }
    draw() {
        for (let i = 0; i<this.getY(); i++)
            console.log("");
    }
};

class Square extends Shape {
    constructor(x,y,newLength) {
        super(x,y);
        var __length__;

        this.setLength = function (length) {
            __length__ = (length > 0)? length: 1;
        }
        this.getLength = function() {
            return __length__;
        }

        this.setLength(newLength);
    }
    draw() {
        super.draw();
        let offset = this.createHorizontalOffset();
        let square = "";
        for (let i = 0; i < this.getLength(); i++) {
            let line = "\n" + offset;
            for (let j = 0; j < this.getLength(); j++)
                line += "*";
            
            square += line;
        }
        console.log(square);
    }
}

class Triangle extends Shape {
    constructor(x, y, newHeight) {
        super(x,y);
        var __height__;

        this.setHeight = function(height) {
            __height__ = (height > 0)? height:1;
        }
        this.getHeight = function() {
            return __height__;
        }
        this.setHeight(newHeight);
    }
    draw() {
        super.draw();
        let triangle = "";
        for (let i = 0; i<this.getHeight(); i++) {
            let line = "\n" + this.createHorizontalOffset(this.getX() - i);

            for (let j=0; j<((i*2) + 1); j++) {
                line += "*";
            }
            triangle += line;
        }
        console.log(triangle);
    }
}

let sq = new Square(5,5,10);
sq.draw('abc');
