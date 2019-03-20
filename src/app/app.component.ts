import {Component, OnInit} from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Movement } from './movement.model';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  stateTableOne = [];
  stateTableTwo = [];

  totito: number[][];
  valueUser = 'X';

  learnMachine = [];

  ngOnInit() {

    this.totito = [];
    this.initializeBoard();


  }

  

  sendCoordinates(x: number, y: number, jugador: string) {

    
    this.totito[x][y] = 1;
    if( this.winner(this.totito) ) {
        console.log("winner jugarodr" )
    } else {
      // this.tableOne(this.totito);
      this.moverMaquina();
      if( this.winner(this.totito) ) {
        console.log("winner maquina" )
      }
    } 

    console.log('totito hasta el momento', this.totito);

    

  }

 
  winner(totito) : boolean {
  

	// ESQUINA SUPERIOR IZQUIERDA
  let movi : Movement[] = [];
  let position = [];
  
  if (totito[0][0] != 0) {
    // ABAJO
    if (totito[1][0] != 0 && totito[1][0] == totito[0][0]) {
      if (totito[2][0] != 0 && totito[2][0] == totito[1][0]) {
        movi.push( new Movement(0, 0) );
        movi.push(new Movement(1, 0));
        movi.push(new Movement(2, 0));
        this.learnMachine.push(movi);
        return true;
      }
    }
    // AL LADO
    if (totito[0][1] != 0 && totito[0][1] == totito[0][0]) {
      if (totito[0][2] != 0 && totito[0][2] == totito[0][1]) {
        movi.push(new Movement(0, 0));
        movi.push(new Movement(0, 1));
        movi.push(new Movement(0, 2));
        this.learnMachine.push(movi);
        return true;
      }
    }
    // DIAGONAL
    if (totito[1][1] != 0 && totito[1][1] == totito[0][0]) {
      if (totito[2][2] != 0 && totito[2][2] == totito[1][1]) {
        movi.push(new Movement(0, 0));
        movi.push(new Movement(1, 1));
        movi.push(new Movement(2, 2));
        this.learnMachine.push(movi);
        return true;
      }
    }
  }
  // MEDIO
  if (totito[0][1] != 0) {
    if (totito[1][1] != 0 && totito[1][1] == totito[0][1]) {
      if (totito[2][1] != 0 && totito[2][1] == totito[1][1]) {
        movi.push(new Movement(0, 1));
        movi.push(new Movement(1, 1));
        movi.push(new Movement(2, 1));
        this.learnMachine.push(movi);
        return true;
      }
    }
  }
  if (totito[1][0] != 0) {
    // ABAJO
    if (totito[1][1] != 0 && totito[1][1] == totito[1][0]) {
      if (totito[1][2] != 0 && totito[1][2] == totito[1][1]) {
        movi.push(new Movement(1, 0));
        movi.push(new Movement(1, 1));
        movi.push(new Movement(1, 2));
        this.learnMachine.push(movi);
        return true;
      }
    }
  }
  // ESQUINA SUPERIOR DERECHA
  if (totito[0][2] != 0) {
    // ABAJO
    if (totito[1][2] != 0 && totito[1][2] == totito[0][2]) {
      if (totito[2][2] != 0 && totito[2][2] == totito[1][2]) {
        movi.push(new Movement(0, 2));
        movi.push(new Movement(1, 2));
        movi.push(new Movement(2, 2));
        this.learnMachine.push(movi);
        return true;
      }
    }
    // DIAGONAL
    if (totito[1][1] != 0 && totito[1][1] == totito[0][2]) {
      if (totito[2][0] != 0 && totito[2][0] == totito[1][1]) {
        movi.push(new Movement(1, 1));
        movi.push(new Movement(0, 2));
        movi.push(new Movement(2, 0));
        this.learnMachine.push(movi);
        return true;
      }
    }
  }
  // ESQUINA INFERIOR DERECHA
  if (totito[2][0] != 0) {
    // ABAJO
    if (totito[2][1] != 0 && totito[2][1] == totito[2][0]) {
      if (totito[2][2] != 0 && totito[2][2] == totito[2][1]) {
        movi.push(new Movement(2, 0));
        movi.push(new Movement(2, 1));
        movi.push(new Movement(2, 2));
        this.learnMachine.push(movi);
        return true;
      }
    }
  }
  return false;

  }


  tableOne(totito: number[][]) {

    let position = [];

    let count = 0;
   

    while ( true ) {
      let randomNumber = Math.floor(Math.random() * 9) + 1;
      position = this.returnPosition(randomNumber);
      let valor = totito[position[0]][position[1]];
      count++;
      if ( valor === 0 ) {
        totito[position[0]][position[1]] = 2;
        return;
      } 

      if (count ===8 ){
        return;
      }

    }
    
    
  }

  returnPosition(randomNumber: number) {

    let position = [];

    if (randomNumber === 1) {
      position.push(0, 0);
    } else if (randomNumber === 2) {
      position.push(0, 1);

    } else if (randomNumber === 3) {
      position.push(0, 2);

    } else if (randomNumber === 4) {
      position.push(1, 0);

    } else if (randomNumber === 5) {
      position.push(1, 1);

    } else if (randomNumber === 6) {
      position.push(1, 2);

    } else if (randomNumber === 7) {
      position.push(2, 0);

    } else if (randomNumber === 8) {
      position.push(2, 1);

    } else if (randomNumber === 9) {
      position.push(2, 2);

    } 


    return position;

  }

  initializeBoard() {
    for (let i = 0; i < 3; i++) {
      this.totito[i] = [];
      for (let j = 0; j < 3; j++) {
        this.totito[i][j] = 0;
      }
    }
  }

  moverMaquina() {
    let maquina = false;
		if(  this.learnMachine.length > 0 ) {
			let greatestValue = 0;
			let greatestMov = [];
			for (let movi of this.learnMachine) {
				let pieza = 0;
				let suma = 0;
				for (let mo of movi) {
					pieza = this.totito[mo.x][mo.y];
					if (pieza != 0 && pieza == 1) {
						suma++;
					}
				}
				if (suma >= greatestValue) {
					greatestValue = suma;
					greatestMov = movi;
				}

			}
			for (let mo of greatestMov) {
				let pieza = this.totito[mo.x][mo.y];
				if (pieza == 0) {
          this.totito[mo.x][mo.y] = 2;
          maquina = true;
					return;
				}
			}
    } 
    if(!maquina) {

				this.tableOne(this.totito);
		}
	}



}
