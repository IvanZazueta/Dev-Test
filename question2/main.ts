export function findOutlier(integers: number[]): number {
    
    var pares : number[] = [];
    var impares : number[] = [];

    for(var i = 0; i < integers.length; i++){

      if ((integers[i] % 2) === 0){
        pares.push(integers[i]);
      }
      else{
        impares.push(integers[i]);
      }
    }

    if (pares.length == 1){
      return pares[0];
    }
    else{
      return impares[0];
    }
  }