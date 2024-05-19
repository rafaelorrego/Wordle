

var height = 6; // numero de letras 
var width = 5 // longitud de la palabra

var fila = 0; // numero de intento
var col = 0; // letra actual para ese intento 

var gameOver = false;
var palabra = "pollo";


// para que cuando se carga la pagina se llame a una funcion que voy  a crear
window.onload = function () {
    recarga()
}
// inicializan despues de la recargas del tablero 
function recarga() {

    // creamos el teblero de intentos para no ir creando en html
    for (let f = 0; f < height; f++) {
        for (let c = 0; c < width; c++) {

            let tile = document.createElement("span");
            tile.id = f.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("tablero").appendChild(tile);
        }
    }

    // para saber que botones presionamos los botones 
    document.addEventListener("keyup", (e) => {
        //if (gameOver) return;
        //ver que teclas presionamos 
        // alert ( e.code);
        //en el siguiente if limitamos a que solo se ouedan presionar teclas de la "A" a la "Z"
        if ("keyA" <= e.code && e.code <= "keyZ") {


            //" REVISAR EL ERROR QUE TENNNNGO EN ACTUAL TILE"
            if (col < width) { 
                if (actualTile.innerText == "") {
                    actualTile = document.getElementById(fila.toString() + "-" + col.toString());
                    actualTile.innerText = e.code[3];
                    col = col +1;

                }
            }
            // para borrar las teclas  o palabras 
        }else if (e.code == "Backspace"){
            if (0 < col && col <= width) {
                col = col -1;
            
                actualTile.innerText = "";
                actualTile = document.getElementById(fila.toString() + '-' + col.toString());
            }
        }
        else if (e.code == "enter"){
            recarga();
            fila= fila + 1; //empezamos de una nueva fila 
            col = 0; // empezamos de cero 
        }
        if (!gameOver && fila == height) {
            gameOver = true;
            document.getElementById("respuesta").innerText = palabra;
        }

        
    })
}
function recarga(){
    let acerto = 0;
    let contadorletra = {};//para hacer un tipo de mapa ej (P:1 O:2 L:1 L:4 )


    for( let c = 0; c < width; c++ ){
       let  actualTile= document.getElementById(fila.toString() + "-" + c.toString());
       let  letra = actualTile.innerText;

       //para saber si estamos enla posicion correcta 
        if (palabra[c] == letra){
            actualTile.classList.add("correcto");
            correcto = correcto + 1;
        }
        //esta en la palabra ??
        else if (word.includes9(letra)){
            actualTile.classList.add("presente")
        }
        // no esta en la palabra
        else{
            actualTile.classList.add("ausente")
        }
        if (acerto == width){
            gameOver = true;
        }
    }
}
