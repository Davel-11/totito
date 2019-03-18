import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  stateTableOne = [];
  stateTableTwo = [];

  totito : number[][];

  ngOnInit( ){

    this.totito = [];
    this.fullFillTotito();

    
    this.firstHumanMove();
  
  }

  sendCoordinates( x : number, y : number, jugador: string ){

    this.totito[x][y] = 1;
    console.log("totito hasta el momento", this.totito );

    this.tableOne(this.totito);   

  }

  fullFillTotito (){
    for (let i=0; i < 3; i++  ){
      this.totito[i] = [];
      for (let j=0; j < 3; j++  ){

         this.totito[i][j] = 0;

      }
    }
  }

  tableOne(totito: number[][]) {

     
      let position = [];
      let positionMove = []; 
      let MovementIs = 0;              
      
      
      
      for (let i=0; i < 9; i++  ){ 
        let randomNumber = Math.floor(Math.random() * 9) + 1 ;
        position = this.returnPosition(randomNumber);

        if( (totito[ position[0] ][  position[1] ]  != 1   ) ){
          
          MovementIs = randomNumber
          break;

        } 
      }

      positionMove = this.returnPosition(MovementIs);
      console.log("primer movimiento es; ", positionMove);

    
  }
  
  firstHumanMove(){

    this.sendCoordinates(1,1,'human');


  }


  returnPosition(randomNumber: number){

    let position = [];
    
    if(randomNumber === 1 ){
      position.push(0,0);
    } else if( randomNumber === 2 ) {
      position.push(0,1);  
    }else if( randomNumber === 3 ) {
      position.push(0,2);  
    }else if( randomNumber === 4 ) {
      position.push(1,0);  
    }else if( randomNumber === 5 ) {
      position.push(1,1);  
    }else if( randomNumber === 6 ) {
      position.push(1,2);  
    }else if( randomNumber === 7 ) {
      position.push(2,0);  
    }else if( randomNumber === 8 ) {
      position.push(2,1);  
    }else if( randomNumber === 9 ) {
      position.push(2,2);  
    } else {
      position.push(99);
    }


    return position;

  }

}
