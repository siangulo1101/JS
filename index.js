const ejercicio1 = [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24,
  ];
  
  console.log (============EJ1==========);

  const compPrimo =  (numero) => {
    for (let i = 2; i <= numero/2; i++) {
      if ( numero % i === 0 ) {
        return false;
      }
      } 
      return true;
  };

  for(let index=0; index < ejercicio1.length; index++){
    const item = ejercicio1[index];

    const esPrimo = compPrimo(item);
    if(esPrimo){
      console.log (item, "es primo" );
    }
  }

console.log (=============EJ2===========)

function admision(invitado){
  if (invitado.edad >= 18 && invitado.esFamiliar){
    console.log(`${invitado.nombre} puede pasar`);
  }
}


  const ejercicio2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];

  console.log (=========EJ 3 =============);

  function fibonacci(limite) {
    const fibonacci = [0, 1]; 
    for (let i = 2; i < limite; i++) { 
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; 
  }
  return fibonacci
  }
  const fibonacciSerie = fibonacci(50);{
console.log (" Los primeros 50 i de la secuencia de fibonacci:" + fibonacciSerie)
  }
  
