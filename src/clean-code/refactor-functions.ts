(() => {


  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit1( fruit: string ): boolean {
      
      if ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) {
          return true;
      } else {
          return false;
      }
  }

  function isRedFruit2( fruit: string ): boolean {
    const fruits = ['manzana', 'cereza', 'ciruela'];
    return fruits.includes(fruit);
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  function getFruitsByColor1( color: string ): string[] {

      if ( color === 'red' ) {
          return ['manzana','fresa'];
      } else if ( color === 'yellow') {
          return ['piña','banana'];
      } else if ( color === 'purple') {
          return ['moras','uvas']
      } else {
          throw Error('the color must be: red, yellow, purple');
      }
  }

  type color = 'red' | 'yellow' | 'purple';

  function getFruitsByColor2( color: color ): string[] {
    const fruitsByColor = {
        red: ['manzana', 'fresa'],
        yellow: ['piña', 'banana'],
        purple: ['moras', 'uvas']
    };

    if (color in fruitsByColor) {
      return fruitsByColor[color];
    }

    throw Error('the color must be: red, yellow, purple');
  }

  // Simplificar esta función
  let isFirstStepWorking  = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking  = true;
  let isFourthStepWorking = true;

  function workingSteps1() {
      if( isFirstStepWorking === true ) {
          if( isSecondStepWorking === true ) {
              if( isThirdStepWorking === true ) {
                  if( isFourthStepWorking === true ) {
                      return 'Working properly!';
                  }
                  else {
                      return 'Fourth step broken.';
                  }
              }
              else {
                  return 'Third step broken.';
              }
          }
          else {
              return 'Second step broken.';
          }
      }
      else {
          return 'First step broken.';
      }
  }

  function workingSteps2() {
    if(!isFirstStepWorking) return 'First step broken.';
    if(!isSecondStepWorking) return 'Second step broken.';
    if(!isThirdStepWorking) return 'Third step broken.';
    if(!isFourthStepWorking) return 'Fourth step broken.';

    return 'Working properly!';
}


  // isRedFruit
  console.log({ isRedFruit: isRedFruit2('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit2('piña'), fruit: 'piña' }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor2('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor2('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor2('purple') }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps2() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();
