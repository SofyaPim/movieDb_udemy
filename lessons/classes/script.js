class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    calcArea(){
        return this.height * this.width;
    }
  }
  const squere = new Rectangle(12,12);
  console.log(squere.calcArea());
  

  class ColoredRectangle extends Rectangle{
    constructor(height, width, color, title) {
       super(height, width);
       this.color = color;
       this.title = title;
      }
      showMyProps(){
        console.log(`text  - ${this.title}, color  - ${this.color}`)
      }

  }
  const div = new ColoredRectangle(30,45, 'green','me');
  console.log(div.showMyProps());