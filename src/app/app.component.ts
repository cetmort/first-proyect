import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-proyect';

  constructor(){
    this.basicFunctions();
  }
  arraysAndObjects(){
    let skills : string[] = ['punch', 'kick'];
    let skillsTwo : number[] = [2,7];

    console.log(skills);

    interface Character{
      name : String,
      healthPoints : number,
      live : boolean,
      skills : string[],
      color? : string
    }

    const character: Character = {
      name : 'Waluigi',
      healthPoints : 100,
      live : true,
      skills : skills
    }

    character.name = 'mario';
    character['color'] = 'red';

    console.log(character);
  }
  ifStatement(){
    let x : number = 20, y : number = 10;
    if(x > y){
      console.log('x es mayor a y');
    }
    else if(x < y){
      console.log('y es mayor a x');
    }
    else if(x == y){
      console.log('x es igual y');
    }
  }
  switchStatement () {
    let a : number = 20, b : number = 15;

    switch (a-b) {
      case 0:
        console.log('Result : 0')
        break;
    
      default:
        console.log('Result : NaN')
        break;
    }
  }
  whileStatement(){
    let counter : number = 0;
    while (counter <= 5) {
      console.log('Ejejcucion númerico ' + counter);
      counter++;
    }
    let i : number = 6;
    do {
      console.log('ejecución numerica' + i);
      i++;
    } while (i <= 5);
  }
  forStatement(){
    let array : number[] = [10,20,30];

    for (const INDEX in array) {
      console.log(INDEX);
      console.log(array[INDEX]);
    }

    for(let i : number = 1; i < array.length; i += 1){
      console.log(i);
    }

    array.forEach(function(value, index){
      if(value == 30){
        console.log(value);
        console.log(index);
      }

      console.log(value);
      console.log(index);
    });
    
  }

  tryCatchStatement(){
    try{
      console.log('hola');
    }
    catch(e){
      console.log(e);
    }
  }

  basicFunctions(){
    function sumNumbers(a: number, b: number) : number{
      return a+b;
    }
    console.log(sumNumbers(2,5));

    const ARROW_NUM = (a: number, b : number) : number => {
      return a+b;
    }
    console.log(ARROW_NUM(1,8));

    function multiplyNumbers(a: number, b: number, c?: number) : number{
      return a*b*(c ?? 1);
    }
    console.log(multiplyNumbers(2, 2));
    console.log(multiplyNumbers(2, 2, 3));

  }


}
