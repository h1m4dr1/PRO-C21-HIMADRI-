class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }

	//bottom layer (second stack)
	block13 = new Block(330,235,30,40);
	block12 = new Block(360,235,30,40);
	block11 = new Block(390,235,30,40);
	block10 = new Block(420,235,30,40);
	block9 = new Block(450,235,30,40);
	
	//middle layer (second stack)
	block8 = new Block(360,195,30,40);
	block7 = new Block(390,195,30,40);
	block6 = new Block(420,195,30,40);

	//top layer (second stack)
	block5 = new Block(360,155,30,40);

	//bottom layer
	block4 = new Block(460,555,30,40);
	block3 = new Block(490,555,30,40);
	block2 = new Block(520,555,30,40);

	//top layer
  block1 = new Block(460,515,30,40);
  
};
