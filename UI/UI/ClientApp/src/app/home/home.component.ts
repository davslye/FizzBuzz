import { Component } from '@angular/core';
import { FizzBuzzComponent } from '../fizzBuzz/fizzBuzz.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public currentCount = 0;
  public fizzBuzzOutput: Array<string> | Array<Array<string>> | any;
  public unparsedInput : string;
  public parsedInput: Array<string>;

  public fizzBuzzOutputDisplay: Array<string>;
  public parsedInputDisplay : string;

  public incrementCounter() {
    this.currentCount++;
  }

  private parseInput(unparsedInput: string) {
    let JSArrayRegex: RegExp = /\[(.*)\]/;
    let filtered: string;
    try {
        filtered = JSON.parse(unparsedInput);
    } catch {
      if (JSArrayRegex.test(unparsedInput)) {
        filtered = ([JSArrayRegex.exec(unparsedInput)[1]] || []).toString();
      } else {
        filtered = `"${unparsedInput}"`
      }
    }
    let intermediate : string[] = filtered.toString().split(",");
    this.parsedInputDisplay = JSON.stringify(intermediate || []);
    return intermediate;
  }

  public runFizzBuzz(unparsedInput: string) {
    let parsedInput = this.parseInput(unparsedInput);
    this.fizzBuzzOutput = new FizzBuzzComponent().computeFizzBuzz(parsedInput);
    this.fizzBuzzOutputDisplay = this.fizzBuzzOutput.map(item => Array.isArray(item) ? item : [item] );
    return this.fizzBuzzOutputDisplay;
  }
}
