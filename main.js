var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object=""; //This variable will be used to store the object of the player

var block_image_object="";


//This function will upload the player image on the canvas
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img; //this variable will hold image of the player

        player_object.scaleToWidth(150); //setting width and height
        player_object.scaleToHeight(140);
        //set x and y coordinates
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}

function new_image(get_image){ //to add image of blocks
    fabric.Image.fromURL(get_image,function(Img){
block_image_object = Img;

block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
    top:player_y,
    left:player_x
})
canvas.add(block_image_object);
    })
}


window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed == '80'){
        console.log("P and Shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keyPressed == '77'){
        console.log("M and Shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keyPressed=='38' || keyPressed == '87'){
        up();
        console.log("Up");
        
    }
    if(keyPressed=='40' || keyPressed == '83'){
        down();
        console.log("Down");
    }
    if(keyPressed=='37' || keyPressed == '65'){
         left();
         console.log("Left");
     }
     if(keyPressed=='39' || keyPressed == '68'){
         right();
         console.log("Right");
     }
if(keyPressed == '66'){
    new_image('wall.jpg');
    console.log("B");
}
if(keyPressed == '84'){
    new_image('trunk.jpg');
    console.log("T");
}
if(keyPressed == '71'){
    new_image('ground.png');
    console.log("G");
}
if(keyPressed == '78'){
    new_image('roof.jpg');
    console.log("N");
}
if(keyPressed == '69'){
    new_image('yellow_wall.png');
    console.log("E");
}
if(keyPressed == '90'){
    new_image('unique.png');
    console.log("Z");
}
if(keyPressed == '76'){
    new_image('light_green.png');
    console.log("L");
}
if(keyPressed == '85'){
    new_image('dark_green.png');
    console.log("U");
}
}

function up(){
    if(player_y >=0){
player_y = player_y - block_image_height;
console.log("Block Image Height = " + block_image_height);
console.log("When up arrow key is pressed, x = "  + player_x + ", y = " + player_y);
canvas.remove(player_object);
player_update(); 

    }
}

function down(){
    if(player_y <=500){
player_y = player_y + block_image_height;
console.log("Block Image Height = " + block_image_height);
console.log("When down arrow key is pressed, x = "  + player_x + ", y = " + player_y);
canvas.remove(player_object);
player_update(); 

    }
}

function left(){
    if(player_x >=0){
player_x = player_x - block_image_height;
console.log("Block Image Height = " + block_image_height);
console.log("When left arrow key is pressed, x = "  + player_x + ", y = " + player_y);
canvas.remove(player_object);
player_update(); 

    }
}

function right(){
    if(player_x <=900){
player_x = player_x + block_image_height;
console.log("Block Image Height = " + block_image_height);
console.log("When right arrow key is pressed, x = "  + player_x + ", y = " + player_y);
canvas.remove(player_object);
player_update(); 

    }
}


