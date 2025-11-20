//3. Treasure hunt

let matriz = [
  [34,21,32,41,25],
  [14,42,43,14,31],
  [54,45,52,42,23],
  [33,15,51,31,35],
  [21,52,33,13,23]
];

function treasureHunt(tablero){
  let filaActual = 1;
  let columnaActual = 1;
  let solucion = false;

  while(solucion == false){
    let valor = tablero[filaActual - 1][columnaActual - 1]; 
    let sigF = Number(valor.toString()[0]);
    let sigC = Number(valor.toString()[1]);

    if(sigF == filaActual && sigC == columnaActual){
      solucion = true;
      return "Has encontrado el tesoro en "+"{"+sigF+","+sigC+"}";
    } else {
      filaActual = sigF;
      columnaActual = sigC;
      console.log("Estas en la posición: "+"{"+sigF+","+sigC+"}");
    }
  }
}

console.log(treasureHunt(matriz));

//4. Random treasure hunt

function treasureHuntRandom(filas,columnas){
    let tablero = [];
     // Elegir aleatoriamente la posición del tesoro
  const fTesoro = Math.floor(Math.random() * filas);
  const cTesoro = Math.floor(Math.random() * columnas);

  // Generar una ruta desde (0,0) hasta el tesoro
  let ruta = [[0, 0]];
  let actual = [0, 0];

  while (actual[0] !== fTesoro || actual[1] !== cTesoro) {
    let posibles = [];

    // Movimientos válidos
    if (actual[0] < filas - 1) posibles.push([actual[0] + 1, actual[1]]);
    if (actual[1] < columnas - 1) posibles.push([actual[0], actual[1] + 1]);

    // Elegir uno aleatorio
    actual = posibles[Math.floor(Math.random() * posibles.length)];
    ruta.push(actual);
  }

  // Asignar valores de la ruta
  for (let i = 0; i < ruta.length - 1; i++) {
    const [f, c] = ruta[i];
    const [sf, sc] = ruta[i + 1];
    tablero[f][c] = (sf + 1) * 10 + (sc + 1);
  }

  // El tesoro se apunta a sí mismo
  tablero[fTesoro][cTesoro] = (fTesoro + 1) * 10 + (cTesoro + 1);

  // Rellenar el resto con valores aleatorios válidos (11–(filas*10+columnas))
  for (let f = 0; f < filas; f++) {
    for (let c = 0; c < columnas; c++) {
      if (tablero[f][c] === 0) {
        const rf = Math.floor(Math.random() * filas) + 1;
        const rc = Math.floor(Math.random() * columnas) + 1;
        tablero[f][c] = rf * 10 + rc;
      }
    }
  }

    /*
    for(let i=0;i<filas;i++){
        tablero[i] = [];
        for(let j=0;j<columnas;j++){
            tablero[i][j] = Math.floor(Math.random()*55)+11;
        }
    }
    let filaActual = 1;
    let columnaActual = 1;
    let solucion = false;

  while(solucion == false){
    let valor = tablero[filaActual - 1][columnaActual - 1]; 
    let sigF = Number(valor.toString()[0]);
    let sigC = Number(valor.toString()[1]);

    if(sigF == filaActual && sigC == columnaActual){
      solucion = true;
      return "Has encontrado el tesoro en "+"{"+sigF+","+sigC+"}";
    } else {
      filaActual = sigF;
      columnaActual = sigC;
    }
  }
    */
}



console.log(treasureHuntRandom(5,5));