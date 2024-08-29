function dibujarCuadrados ( x,  y){
  for ( let i = 0; i <cant2; i++){
    for ( let j = 0; j <cant2; j++){
      push();
      translate(500+x * 200,100+y * 200);
      rectMode(CENTER);
      //fill(255);
      if(x+y==0){
        fill(cuadro1);
      }else{
        if(x+y==2){
          fill(cuadro4);
      } 
      }
      if(x==0 && y==1){
        fill(cuadro2);
      }
      else{if(x==1 && y==0){
             fill(cuadro3);
      }
      }
      rect(0,0,tam-j * 20,tam-j * 20);
      pop();
    }
  }
}

function dibujarGrilla(){
  for (let k=0; k < cant; k++){
    for(let t=0; t < cant; t++){
      dibujarCuadrados(k,t);
    }
  }
}


function colorRandom (rango){
  return(random(rango));
}
