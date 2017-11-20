/**
 * [CesarCypher clase que crea un encriptador/desencriptador de cadenas de texto]
 * @param {[number]} mascara        [valor de la máscara] 
 * @param {[number]} desplazamiento	[valor del desplazamiento]
 * @method [crypt]  	método público que se le pasa un texto en mayúsculas/espacios y devuelve el texto cifrado
 * @method [decrypt] 	método público que se le pasa un texto en mayúsculas/espacios y devuelve el texto descifrado
 */
var _0xebe5=["\x6D\x61\x73\x63","\x73\x68\x69\x66\x74","\x41","\x42","\x43","\x44","\x45","\x46","\x47","\x48","\x49","\x4A","\x4B","\x4C","\x4D","\x4E","\x4F","\x50","\x51","\x52","\x53","\x54","\x55","\x56","\x57","\x58","\x59","\x5A","\x20","\x6C\x65\x6E\x67\x74\x68","\x63\x72\x79\x70\x74","","\x64\x65\x63\x72\x79\x70\x74"];function CesarCypher(_0x3a6ax2,_0x3a6ax3){this[_0xebe5[0]]= _0x3a6ax2* 1;this[_0xebe5[1]]= _0x3a6ax3* 1;var _0x3a6ax4=[_0xebe5[2],_0xebe5[3],_0xebe5[4],_0xebe5[5],_0xebe5[6],_0xebe5[7],_0xebe5[8],_0xebe5[9],_0xebe5[10],_0xebe5[11],_0xebe5[12],_0xebe5[13],_0xebe5[14],_0xebe5[15],_0xebe5[16],_0xebe5[17],_0xebe5[18],_0xebe5[19],_0xebe5[20],_0xebe5[21],_0xebe5[22],_0xebe5[23],_0xebe5[24],_0xebe5[25],_0xebe5[26],_0xebe5[27]];var _0x3a6ax5=function(_0x3a6ax6,_0x3a6ax3){if(_0x3a6ax6== _0xebe5[28]){return _0x3a6ax6};for(var _0x3a6ax7=0;_0x3a6ax7< _0x3a6ax4[_0xebe5[29]];_0x3a6ax7++){if(_0x3a6ax4[_0x3a6ax7]== _0x3a6ax6){break}};return _0x3a6ax4[(_0x3a6ax7+ _0x3a6ax3)% _0x3a6ax4[_0xebe5[29]]]};var _0x3a6ax8=function(_0x3a6ax6,_0x3a6ax3){if(_0x3a6ax6== _0xebe5[28]){return _0x3a6ax6};for(var _0x3a6ax7=0;_0x3a6ax7< _0x3a6ax4[_0xebe5[29]];_0x3a6ax7++){if(_0x3a6ax4[_0x3a6ax7]== _0x3a6ax6){break}};var _0x3a6ax3=_0x3a6ax3% _0x3a6ax4[_0xebe5[29]];return (_0x3a6ax7- _0x3a6ax3)< 0?_0x3a6ax4[_0x3a6ax7- _0x3a6ax3+ _0x3a6ax4[_0xebe5[29]]]:_0x3a6ax4[(_0x3a6ax7- _0x3a6ax3)% _0x3a6ax4[_0xebe5[29]]]};this[_0xebe5[30]]= function(_0x3a6ax9){var _0x3a6axa=_0xebe5[31];for(var _0x3a6ax7=0;_0x3a6ax7< _0x3a6ax9[_0xebe5[29]];_0x3a6ax7++){_0x3a6axa+= _0x3a6ax5(_0x3a6ax9[_0x3a6ax7],this[_0xebe5[0]]+ this[_0xebe5[1]])};return _0x3a6axa};this[_0xebe5[32]]= function(_0x3a6ax9){var _0x3a6axa=_0xebe5[31];for(var _0x3a6ax7=0;_0x3a6ax7< _0x3a6ax9[_0xebe5[29]];_0x3a6ax7++){_0x3a6axa+= _0x3a6ax8(_0x3a6ax9[_0x3a6ax7],this[_0xebe5[0]]+ this[_0xebe5[1]])};return _0x3a6axa}}
/**
 * [RandomField clase formada por un input y un boton que rellena el input con valores aleatorios entre los números min y max]
 * @param {[number]} min [valor minimo del generador]
 * @param {[number]} max [valor máximo del generador]
 */
function RandomField(min,max){
			
	this.input=document.createElement("input");	
	this.input.setAttribute('type', 'text');		
	this.input.setAttribute('value', 0);
	var _input=this.input
	this.button=document.createElement("input");	
	this.button.setAttribute('type', 'button');		
	this.button.setAttribute('value', 'Genera');
	this.button.min=min
	this.button.max=max
	this.button.addEventListener("click",function(){
			/**
			 * [getRandomInt genera un número aleatorio entre los números min y max]
			 * @param  {[number]} min [valor minimo del generador]
			 * @param  {[number]} max [valor máximo del generador]
			 * @return {[number]}     [número aleatorio entre min y max]
			 */
			function getRandomInt(min, max) {
			  return Math.floor(Math.random() * (max - min)) + min;
			}
			_input.value=getRandomInt(this.min*1,this.max*1)
	})

}

/**
 * [UiCypher clase que contiene dos RandomField]
 */


function uiCypher(){

	this.mascField = new RandomField(1,25);
	this.shiftField = new RandomField(1,1000000);
}

/**
 * [Cypher clase que contiene la tabla de filas con UiCyphers,un boton para añadir, dos textareas y dos botones cifrar/descifrar]
 */


 function Cypher(){

 	//arrays de uiCyphers
 	enigma = [];


 	//tabla
 	tabla = document.createElement("table");
 	tabla.setAttribute("width","500px");
 	tabla.setAttribute("border", "1");

 	//area1
 	area1 = document.createElement("textarea");

 	//area2
 	area2 = document.createElement("textarea");


 	//boton1 ENCRIPTAR
 	boton1 = document.createElement("input");
 	boton1.setAttribute("type","submit");
 	boton1.setAttribute("value","CRYPT");

 	

 	//boton2 DESENCRIPTA
 	boton2 = document.createElement("input");
 	boton2.setAttribute("type","submit");
	boton2.setAttribute("value","DECRYPT");	


	tabla.appendChild(area1);
	tabla.appendChild(area2);
	tabla.appendChild(boton1);
	tabla.appendChild(boton2);

	// meto el primer uiCypher

	firstRow = new uiCypher();
	enigma[enigma.length] = firstRow;
	tabla.appendChild(firstRow.mascField.input);
	tabla.appendChild(firstRow.mascField.button);
	tabla.appendChild(firstRow.shiftField.input);
	tabla.appendChild(firstRow.shiftField.button);



	//creo metodo publico para addRow
	this.add = function(){

		row = new uiCypher();

		//ej1 c
		enigma[enigma.length] = row;
		tabla.appendChild(row.mascField.input);
		tabla.appendChild(row.mascField.button);
		tabla.appendChild(row.shiftField.input);
		tabla.appendChild(row.shiftField.button);
	}

	//creo el boton para asignarle el add
	crear = document.createElement("input")
	crear.setAttribute("type","submit");
 	crear.setAttribute("value","AÑADE");


 	//añado el evento
 	comod = this.add;
 	crear.addEventListener("click",function(){
 		comod();
 	})


 	tabla.appendChild(crear);

	//muestro
	miCapa = document.getElementById("resultado");
	miCapa.appendChild(tabla);


	//evento ENCRIPTAR

 	boton1.addEventListener("click",function(){

 		cadena = area1.value.toUpperCase();

 		for(i = 0;i<enigma.length;i++){

 			cesarin = new CesarCypher(enigma[i].mascField.input.value * 1,enigma[i].shiftField.input.value * 1);
 			cadena = cesarin.crypt(cadena);
 			


 		}

 		area2.value = cadena;

 	})

 	//evento DESENCRIPTAR

 	boton2.addEventListener("click",function(){

 		cadena = area2.value.toUpperCase();

 		for(i = 0;i<enigma.length;i++){

 			cesarin = new CesarCypher(enigma[i].mascField.input.value * 1,enigma[i].shiftField.input.value * 1);
 			cadena = cesarin.decrypt(cadena);
 			


 		}

 		area1.value = cadena;




 	})




}

	Cypher();

/**
 * [addRow método público de la clase Cypher que añade una fila a la tabla con un UiCypher por fila]
 */
	
/**
 * [show método público de la clase Cypher que muestra en el documento la interfaz HTML del Cypher]
 * 
 */
	
/**
 * [Hacer que el cypher se muestre en el documento]
 * 
 */


