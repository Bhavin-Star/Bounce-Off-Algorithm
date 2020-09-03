var fixedrect, movingrect;

function setup() { 
 
  createCanvas(1200,800);
  
 fixedrect = createSprite(600,800,50,80);
 fixedrect.shapeColor = 'green';
 fixedrect.velocityY = -5;

 movingrect= createSprite(600,100,80,30);
 movingrect.shapeColor = 'green';
 movingrect.velocityY = 5;
}

function draw() {
  background(0,0,0);  
  // movingrect.x= World.mouseX;
  // movingrect.y = World.mouseY; 

  

  if(movingrect.x - fixedrect.x <= fixedrect.width/2 + movingrect.width/2  &&
    fixedrect.x - movingrect.x <= fixedrect.width/2 + movingrect.width/2 ){
      
      movingrect.velocityX  = (-1) * movingrect.velocityX; 
      fixedrect.velocityX = (-1) * fixedrect.velocityX
    }
   if (movingrect.y - fixedrect.y <= fixedrect.height/2 + movingrect.height/2 && 
    fixedrect.y - movingrect.y <= fixedrect.height/2 + movingrect.height/2){

        movingrect.velocityY = (-1) * movingrect.velocityY;
        fixedrect.velocityY = (-1) * fixedrect.velocityY;

    }

// console.log(movingrect.x - fixedrect.x);


  drawSprites();
}

