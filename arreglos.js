//ejercicio1
const obtenerMenor=(numeros)=>{
    let menor=Infinity; //
    for(let i =0;i<numeros.length; i++){
        if(numeros[i]<=menor){
            menor= numeros[i];

        }
    }
    return (menor);
}
console.log(obtenerMenor([5,4,7,1,2]));


//ejercicio2

const sumaNumeros=(numero)=>{
    let sum="";
    for(let i=0;i<numero.length;i++){
     sum=parseInt(sum+numero[i]);
    }
    return sum;
}
console.log(sumaNumeros([1,2,3,4]));

//ejercicio3

const contieneIndice=(numero2,numeros3)=>{
    for(let i=0;i<numeros3.length;i++){
        if(numeros3[i]===numero2){
            return true
        }
    }
    return false
}
console.log(contieneIndice(34,[4,5,6,7,34]));
console.log(contieneIndice(1,[4,5,6,7,34]));


const separar =(string)=>{
    const arrayEmoji=string.sort().reverse(); //metodo sort es para ordenar y el reverse en formacontratia 
    return arrayEmoji
}
console.log(separar(['🐶','🐱','🐶','🐱','🐶','🐱','🐶','🐱','🐶']))

//ejercicio3

const estanJuntos =(personajes)=>{
    const frodo = personajes.indexOf('frodo');//busca los nombres
    const sam =personajes.indexOf('sam');
    return sam-frodo === 1 || sam-frodo === -1;
}
console.log(estanJuntos(['sam','frodo','legolas']))//true
console.log(estanJuntos(['aragon','frodo','frodo']))//true
console.log(estanJuntos(['sam','orco','frodo']))//false

//ejercio4
/*const obtenerIndice=(valor,arr)=>{
     const indice=arr.indexOf(valor);
    return indice;
};*/
const obtenerIndice=(valor,arr)=> arr.indexOf(valor);

console.log(obtenerIndice(2,[3,6,2,9]))
console.log(obtenerIndice(7,[3,6,2,9]))


/*crear una funcion repetir que tome un argumento un valor valor 
y un numero entero cantidad y devuelva un array con valor repetido cantidad de veces*/

const repetir=(valor,cantidad)=>{
    let arr=[];
for (let i=0;i<cantidad;i++){
    arr.push(valor);
    
    }
    return arr;
}
console.log(repetir('lovelace',3));
console.log(repetir('a',5));
console.log(repetir('html',0));