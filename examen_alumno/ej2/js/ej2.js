
/** CesarCypher : clase que representa un cifrador de texto en formato cesar con máscara para encriptar/desencriptar texto
 * @param {[number]} masc: mascara del algortimo cesar
 * @param {[number]} shift: desplazamiento del algoritmo cesar
 */

 function cesarCypher(mascara, desplazamiento){



 		this.masc = mascara;

 		this.shift = desplazamiento;




 /** toBinary convierte un numero en binario como cadena
 * @param  {[number]} num:numero entero
 * @return {[string]} conversion de num en binario como una cadena
 */
function toBinary(num){
	return num.toString(2)
}
/** letterToNumber convierte un caracter en su numero ascii equivalente 
 * @param  {[string]} letter: cadena de una sola letra
 * @return {[number]} conversión del caracter en su codigo ascii entre 65 y 90
 */
var letterToNumber = function(letter) {
return letter.charCodeAt(0)
}
/** _crypt si number no está entre 65 y 90 devuelve una referencia circular entre esos dos valores. pe. de 91 devuelve 65,de 92 devuelve 66 y de 64 devuelve 90, de 63 dev 89
 * @param  {[number]} number: numero que representa una letra 
 * @return {[number]} referencia circular del número number entre 65 y 90 para convertir a ascii
 */
var _crypt = function(number) {
	if(number<65) return number+26
return number>90?number-90+64:number
}
/**
 * @param  {[number]} number: número entre 65 y 90 que represnta un caracter
 * @return {[string]} cadena de una letra que representa number en ascii
 */
var numberToChar=function(number){
	return String.fromCharCode(number)
}


	







// posicion texto % longitud binario



/** letterCrypt
 * @param  {[string]}   letter: cadena de una sola letra
 * @param  {[number]}	pos: posicion dentro del texto donde se encuentra la letra letter
 * @param  {[boolean]}	type: si type es true indica que debe cifrar la letra letter. Si type es false indica que debe descifrar la letra letter
 * @return {[string]}	cadena de una sola letra cifrada/descifrada a partir de los valores masc y shift con un cesar enmascarado
 */

 		x = this.masc;
		y = this.shift;

	function letterCrypt(letter,pos,type){

		if(letter == " "){
			return " ";

		}else {

				if(type){
			// sumar = encripta
				return numberToChar(_crypt(letterToNumber(letter) + (y + (pos%toBinary(x).length))));
			
			}else{
			//restar = desencripta
				return numberToChar(_crypt(letterToNumber(letter) - (y + (pos%toBinary(x).length))));
		}

		}

		


	}



	
/** transform
 * @param  {[boolean]} type parámetro boolean que se le pasa a f
 * @param  {[function]} f función de tipo letterCrypt(letter,pos,type)
 * @return {[function]} funcion que requiere un texto y devuelve el texto cifrado/descrifrado utilizando la funcion f. Para ello debe recorrer el texto y llama a la funcion f por cada caracter
 */
	

	function transform(type,f){


		if(type){

			return function(texto){

					var cadena = "";

				for(i=0;i<texto.length;i++){

					cadena += f(texto[i],i,true);

				}

				return cadena;
			}
		}else{

			return function(texto){

					var cadena = "";

				for(i=0;i<texto.length;i++){

					cadena += f(texto[i],i,false);

				}

				return cadena;
			}


		}

	}





/**
 * [crypt description] definión del método público de cifrado a partir de transform
 * @type {[function]} funcion que requiere un texto y devuelve el texto cifrado
 */


		// encriptar
 		this.crypt = transform(true,letterCrypt);

/**	
 * [decrypt description] definión del método público de descifrado a partir de transform
 * @type {[function]} funcion que requiere un texto y devuelve el texto descrifrado
 */
		
 		//desencriptar
 		this.decrypt = transform(false,letterCrypt);

}

/** Utilización de la clase CesarCypher
 * Construir un objeto cesarCypher con mascara 1023 y desplazamiento 3
 * Cifrar el texto "ZAPATERO A TUS ZAPATOS VALENCIA DESARROLLO DE APLICACIONES  WEB" y mostrar el texto cifrado en consola.
 * Descifrar el texto cifrado y mostrar el resultado en consola.
 */


pepe = new cesarCypher(1012,3);


console.log("TEXTO : ZAPATERO A TUS ZAPATOS VALENCIA DESARROLLO DE APLICACIONES  WEB");

console.log("ENCRIPTADO : " + pepe.crypt("ZAPATERO A TUS ZAPATOS VALENCIA DESARROLLO DE APLICACIONES  WEB"));

console.log("DESENCRIPTADO : " + pepe.decrypt(pepe.crypt("ZAPATERO A TUS ZAPATOS VALENCIA DESARROLLO DE APLICACIONES  WEB")));