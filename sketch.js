var stopArea1, stopArea2, stopArea3
function setup() {
  createCanvas(800,400);
  stopArea1 = createSprite(785, 30, 20, 40);
  stopArea2 = createSprite(785, 200, 20, 40);
  stopArea3 = createSprite(785, 370, 20, 40);
  
  
  line1 = createSprite(395, 10, 800, 5);
  line2 = createSprite(395, 50, 800, 5);
  line3 = createSprite(395, 180, 800, 5);
  line4 = createSprite(395, 220, 800, 5);
  line5 = createSprite(395, 350, 800, 5);
  line6 = createSprite(395, 390, 800, 5);
  

  line1.shapeColor = "white"
  line2.shapeColor = "white"
  line3.shapeColor = "white"
  line4.shapeColor = "white"
  line5.shapeColor = "white"
  line6.shapeColor = "white"
  



  stopArea1.shapeColor = "white"
  stopArea2.shapeColor = "white"
  stopArea3.shapeColor = "white"
  

  car1 = createSprite(150, 30, 40, 20, car1_options);
  car2 = createSprite(50, 200, 40, 20, car2_options);
  car3 = createSprite(50, 370, 40, 20, car3_options);


  car1.shapeColor = "blue"
  car2.shapeColor = "white"
  car3.shapeColor = "white"


  var car1_options = {
    velocityX:3
  }



  var car2_options = {
    velocityX:5
  }



  var car3_options = {
    velocityX:7
  }



  console.log("car1 velocity is "+car1.velocityX);
  console.log("car2 velocity is "+car2.velocityX);
  console.log("car3 velocity is "+car3.velocityX);


}

function draw() {
  background(0);  
  drawSprites();
 
  if (car1.isTouching()(stopArea1)){
    
    car1.shapeColor = "red"
    
  }

  else {
  
    car1.shapeColor = "white"

  }
  






  if (car2(isTouching()(stopArea2))){
    car2.shapeColor = "yellow"
    
  }

  else {
    
    car2.shapeColor = "white"

  }






  if (car3(isTouching()(stopArea3))){
    car3.shapeColor = "red"
    
  }

  else {
    
    car3.shapeColor = "white"

  }




}

function isTouching(){
  
  if (car1.x-stopArea1.x < stopArea1.width/2+car.width/2
    && stopArea1.x - car1.x < stopArea1.width/2+car.width/2
    && car1.y - stopArea1.y < stopArea1.height/2+car.width/2
    && stopArea1.y - car1.y < stopArea1.height/2+car.width/2
    )  
  {
    
    return true
  }

  else {
    
    return false
  }


}



