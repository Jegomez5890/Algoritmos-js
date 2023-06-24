function suma() {
    let num1 = 0;
    let num2 = 0;
        
    alert("digite los numeros que desea sumar");
    num1 = prompt("Ingrese el primer número que desea sumar");
    num2 = prompt("Ingrese el segundo número que desea sumar");
        
    let resultado = parseInt(num1) + parseInt(num2);
    alert("El resultado de la suma es: " + resultado);
    }
    
    
    function opBasicas(){
    let num1 = prompt('Escriba el primer numero');
    let num2 = prompt('Escriba el segundo numero');
        
    let suma = parseInt(num1) + parseInt(num2);
    let resta = parseInt(num1) - parseInt(num2);
    let multiplicacion = parseInt(num1) * parseInt(num2);
    let division = parseInt(num1) / parseInt(num2);
        
    alert('La suma de los dos numeros es: ' + suma);
    alert('La resta de los dos numeros es: ' + resta);
    alert('La multiplicacion de los dos numeros es: ' + multiplicacion);
    alert('La division de los dos numeros es: ' + division);
    }
    
    function cuadrado(){
    let A = 0;
    let C = 0;
        
    A = parseInt(prompt("ingrese el valor"));
    C = A * A;
    alert("el cuadrado del numero es: " + C);
    }
    
    
     function triangulo(){
        let A = 0;
        let T = 0;
        
        A = parseInt(prompt("ingrese la base"));
        B = parseInt(prompt("ingrese la altura"));
        T = (A * B) / 2;
        alert("el area del triangulo es: " + T);
        }
    function invercion(){
    
    let capitalInicial = parseInt(prompt("cuanto desea invertir a capital?"));
    let añosInvertidos = parseInt(prompt("cuantos años desea que dure la inversion?"));
    let interesMensual = 1.7;
    let capitalFinal = capitalInicial * Math.pow(1 + (interesMensual/100), añosInvertidos);
    alert(" Despues de:  " + añosInvertidos + " años,el capital inicial de:  " + capitalInicial + " tendra un valor de:  " + capitalFinal + ".");
    }
    
    function nacimiento(){
    //Declarar variables
    let edad;
    let añoActual;
    
    //Solicitar datos
    edad = prompt("Ingrese su edad");
    añoActual = prompt("Ingrese el año actual");
    
    //Calcular año de nacimiento
    let añoNacimiento = añoActual - edad;
    
    //Mostrar datos por pantalla
    alert("Su año de nacimiento es: " + añoNacimiento);    
    }
    
    function convercion(){
    //Declarar variables
    let metros, kilometros, pulgadas;
    
    //Capturar el valor en metros
    metros = prompt("¿Cuántos metros son?");
    
    //Realizar conversion
    kilometros = metros / 1000;
    pulgadas = metros * 39.3701;
    
    //Mostrar en pantalla
    alert(`${metros} metros son ${kilometros} kilometros y ${pulgadas} pulgadas.`);
    
    //Fin
    }
    
    function mayor(){
    let numero1 = prompt("digite el primer numero");
    let numero2 = prompt("digiete el segundo numero");
    if (numero1 > numero2) {
    alert(numero1 + " es el numero mayor");
    } else {
    alert(numero2 + " es el numero mayor"); }    
    }
    
    function menor() {
        let numero1 = parseInt(prompt("Digite el primer número"));
        let numero2 = parseInt(prompt("Digite el segundo número"));
        let numero3 = parseInt(prompt("Digite el tercer número"));
    
        if (numero1 < numero2 && numero1 < numero3) {
            alert(numero1 + " es el número menor");
        } else if (numero2 < numero1 && numero2 < numero3) {
            alert(numero2 + " es el número menor");
        } else {
            alert(numero3 + " es el número menor");
        }
    }

    
   
    function descuento(){
    
    let precioProducto = prompt("digite el precio del producto");
    let porcentajeDescuento = 10;
    let descuento = (precioProducto * porcentajeDescuento) / 100;
    let nuevoPrecio = precioProducto - descuento;
    alert(`El precio del producto con un descuento del ${porcentajeDescuento}% es de $${nuevoPrecio}`);
    }
    
    function nombre(){
    let N1 = prompt("digite su nombre");
    let A2 = prompt("digite su apellido");
    alert("su nombre es: " +  N1);
    alert("su apellido  es: " +  A2);
    alert("su nombre completo es: "  +  N1  +  A2 );  
    }
    
   
    
    
    
    
    
    
    
    
    
    
    