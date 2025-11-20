//3 en raya
/*
let jugador1 = "X";
let jugador2 = "O";

let tablero = ["", "", "", "", "", "", "", "", ""];

const combinaciones = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function comprobarGanador() {
  for (let comb of combinaciones) {
    const [a, b, c] = comb;
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      return tablero[a]; // Devuelve "X" o "O"
    }
  }
  return null;
}

function jugadaAleatoria() {
  let turno = jugador1; 
  
  while (true) {
    // Obtener posiciones vacías
    let vacias = tablero
      .map((v, i) => (v === "" ? i : null))
      .filter(v => v !== null);
    
    // Si no hay más movimientos, es empate
    if (vacias.length === 0) {
      console.log("Empate!");
      break;
    }

    // Elegir una posición aleatoria libre
    let pos = vacias[Math.floor(Math.random() * vacias.length)];
    tablero[pos] = turno;

    // Comprobar si hay ganador
    let ganador = comprobarGanador();
    if (ganador) {
      console.log("El ganador es: " + ganador);
      break;
    }

    // Cambiar turno
    turno = (turno === jugador1) ? jugador2 : jugador1;
  }

  return tablero;
}

console.log(jugadaAleatoria());
*/

class TresEnRaya{
  tablero;
  turnoJugador;
  constructor(){
    this.reiniciaPartida();
  }
   //Devuelve:
//0 si el movimiento es correcto
//1 si la casilla está ocupada
//2. si no es el turno del jugador
// 3 si con ese movimiento el jugador gana
// 4. Empate 
  mueve(celdaX,celdaY,jugador){
    let devolver = 0;

  if (this.tablero[celdaX][celdaY] === " ") {
    if (jugador === this.turnoJugador) {
      this.tablero[celdaX][celdaY] = jugador === 1 ? "X" : "O";
      const resultado = this.comprobarGanador();

      if (resultado === "X" || resultado === "O") {
        devolver = 3; 
      } else if (resultado === "Empate") {
        devolver = 4; 
      } else {
        this.turnoJugador *= -1;
      }

    } else {
      devolver = 2; 
    }
  } else {
    devolver = 1;
  }
  return devolver;
}
  mueveJ1(celdaX,celdaY){
    return this.mueve(celdaX,celdaY,1);
  }

  mueveJ2(celdaX,celdaY){
    return this.mueve(celdaX,celdaY,-1);
  }

  reiniciaPartida(){
    this.tablero = new Array(3);
    for(let i = 0;i<3;i++){
      this.tablero[i] = [" "," "," "];
    }
    
    this.turnoJugador = 1;
  }

  comprobarGanador(){
    for (let i = 0; i < 3; i++) {
      if (this.tablero[i][0] !== " " &&
          this.tablero[i][0] === this.tablero[i][1] &&
          this.tablero[i][1] === this.tablero[i][2]) {
        return this.tablero[i][0];
      }
    }
    for (let i = 0; i < 3; i++) {
      if (this.tablero[0][i] !== " " &&
          this.tablero[0][i] === this.tablero[1][i] &&
          this.tablero[1][i] === this.tablero[2][i]) {
        return this.tablero[0][i];
      }
    }
    return null;
  }
}

let juego = new TresEnRaya();

console.log(juego.mueveJ1(0, 0)); 
console.log(juego.mueveJ2(1, 1)); 
console.log(juego.mueveJ1(0, 1)); 
console.log(juego.mueveJ2(2, 2)); 
console.log(juego.mueveJ1(0, 2));
