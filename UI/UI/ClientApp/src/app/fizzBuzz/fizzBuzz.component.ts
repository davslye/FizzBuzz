import { Component } from '@angular/core';

@Component({
  selector: 'app-fizzbuzz-component',
  templateUrl: './fizzbuzz.component.html'
})
export class FizzBuzzComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }

  public isDivisibleByFactor(num, factor) {
    return ((num % factor) == 0);
  };

  public determineFactorOuput(num, factor, positiveCase, negativeCase) {
    return this.isDivisibleByFactor(num, factor) ? { positiveCase } : { negativeCase };
  };

  public computeFizzBuzz(incomingData) {
    let outputMessages = incomingData.map(element => {
      try {
        let num = Number.parseInt(element, 10);
        if (Number.isNaN(num)) {
          return ['Invalid Item'];
        } else {
          let FizzFactor = 3;
          let BuzzFactor = 5;

          let FizzResult = this.determineFactorOuput(num, FizzFactor, 'Fizz', `Divided ${num} by ${FizzFactor}`);
          let BuzzResult = this.determineFactorOuput(num, BuzzFactor, 'Buzz', `Divided ${num} by ${BuzzFactor}`);

          if (FizzResult.positiveCase || BuzzResult.positiveCase) {
            return [[FizzResult.positiveCase, BuzzResult.positiveCase].join("")];
          } else {
            return [FizzResult.negativeCase, BuzzResult.negativeCase];
          }
        }
      } catch {
        return ['Invalid Item'];
      }
    });

    return outputMessages    
  }  
}
