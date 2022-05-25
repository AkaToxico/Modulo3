var numberOfSquares = 6;
var colors = generateRandomColors(6);
var square = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var titulo = document.querySelector("h1");
var pickedColor = colors[pickColor(5)];
var colorDisplay= document.querySelector("#colorDisplay");
var reset = document.querySelector(".reset");
var dificil = document.querySelector("#dificil");
var facil = document.querySelector("#facil");



function cuadrados(){                                     //Recorre los cuadrados y les da color de fondo.
  for (i = 0; i < square.length; i++) {
    square[i].style = "background-color:"+colors[i];
    colorDisplay.innerHTML = pickedColor;
  }
}

function juego (){                                        //Funcionamiento del juego
  cuadrados()
  for (i = 0; i < square.length; i++) {
    square[i].addEventListener("click", function(e){
      let clickedColor=this.style.backgroundColor;
      if(pickedColor==clickedColor){
      message.innerHTML="¡Correcto!";
      reset.innerHTML="Play again?"
      changeColors(clickedColor);
        }else{
          this.style.backgroundColor="#232323";
          message.innerHTML="Intenta Nuevamente";
      }
    }
    
  )}
}

function changeColors(){                                        //Cambia de color el titulo
    titulo.style.color=pickedColor;
    for (i=0; i<square.length; i++) {
      square[i].style.backgroundColor=pickedColor;
    }
}

function pickColor(num){                                        //Numero aleatorio para color
    return Math.ceil(Math.random()*num-1).toFixed(0);
}


function randomColor(){                                        //color aleatorio
    return "rgb("+pickColor(255)+", "+pickColor(255)+", "+pickColor(255)+")";
}

//---------------------------------

function generateRandomColors(numberOfSquares){
  if(numberOfSquares==6){
    return [randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor()];
  } else if(numberOfSquares==3){
    return [randomColor(),randomColor(),randomColor()];
  }
}
//var numberOfSquares = 6
generateRandomColors(numberOfSquares)
//console.log(generateRandomColors(numberOfSquares))
//----------------------------------

function generateRandomColors6(){                             // 6 colores
   return [randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor()];
}

function generateRandomColors3(){                            //3 colores
    return [randomColor(),randomColor(),randomColor()];
}


 
reset.addEventListener("click", function(){                 // Nuevos colores
  colors = generateRandomColors(numberOfSquares);
  pickedColor = colors[pickColor(5)];
  colorDisplay.innerHTML = pickedColor;
  reset.innerHTML="Nuevos Colores"
  message.innerHTML="";
  facil.classList.remove("selected");
  dificil.classList.add("selected")
  juego();
  
})

dificil.addEventListener("click", function(){               //modo de juego dificil
  facil.classList.remove("selected");
  dificil.classList.add("selected")
  numberOfSquares = 6;
  colors=generateRandomColors(numberOfSquares);
  pickedColor = colors[pickColor(5)];
  colorDisplay.innerHTML = pickedColor;
  reset.innerHTML="Nuevos Colores"
  message.innerHTML="";
  for (i = 0; i < square.length; i++) {
    square[i].style = "background-color:"+colors[i];
  }
})


facil.addEventListener("click", function(){                 //modo de juego facil
  facil.classList.add("selected");
  dificil.classList.remove("selected")
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = colors[pickColor(2)];
  colorDisplay.innerHTML = pickedColor;
  reset.innerHTML="Nuevos Colores"
  message.innerHTML="";
    juego()
  for(i=3; i<=5; i++){
    square[i].style.visibility="hidden";
  //square[0].style.backgroundColor="pickedColor[0]";
  ///square[1].style.backgroundColor="pickedColor[1]";
  //square[2].style.backgroundColor="pickedColor[2]";
 // square[3].style.visibility="hidden";
 // square[4].style.visibility = "hidden";
 // square[5].style.visibility = "hidden";
  
  }
})

juego()