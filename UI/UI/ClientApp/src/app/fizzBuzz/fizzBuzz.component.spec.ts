import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzBuzzComponent } from './fizzBuzz.component';

describe('FizzBuzzComponent', () => {
  let fixture: ComponentFixture<FizzBuzzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FizzBuzzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzBuzzComponent);
    fixture.detectChanges();
  });

  it('isDivisibleByFactor should be true that 21 is divisible by 3', async(() => {
    const result = new FizzBuzzComponent().isDivisibleByFactor(21, 3);
    expect(result).toBeTruthy();
  }));

  it('isDivisibleByFactor should be true that 17 is not divisible by 3', async(() => {
    const result = new FizzBuzzComponent().isDivisibleByFactor(17, 3);
    expect(result).toBeFalsy();
  }));

  it('determineFactorOuput should be Fizz when 27 is divisble by 3', async(() => {
    const positiveCase = 'Fizz';
    const negativeCase = 'Not Fizz';
    const result = new FizzBuzzComponent().determineFactorOuput(27, 3, positiveCase, negativeCase);
    expect(result).toEqual({ positiveCase });
  }));

  it('determineFactorOuput should be Not Fizz when 8 is not divisble by 3', async (() => {
    const positiveCase = 'Fizz';
    const negativeCase = 'Not Fizz';
    const result = new FizzBuzzComponent().determineFactorOuput(8, 3, positiveCase, negativeCase);
    expect(result).toEqual({ negativeCase });
  }));

  it('computeFizzBuzz should be [[\'Fizz\']] when passed [3]', async(() => {
    const positiveCase = 'Fizz';
    const negativeCase = 'Not Fizz';
    const result = new FizzBuzzComponent().computeFizzBuzz([3]);
    expect(result).toEqual([[positiveCase]]);
  }));

  it('computeFizzBuzz should be [[\'Buzz\']] when passed [25]', async(() => {
    const expectedValue = 'Buzz';
    const incomingData = [25];
    const result = new FizzBuzzComponent().computeFizzBuzz(incomingData);
    expect(result).toEqual([[expectedValue]]);
  }));

  it('computeFizzBuzz should be [[\'Invalid Item\']] when passed ["A"]', async(() => {
    const expectedValue = 'Invalid Item';
    const incomingData = ["A"];
    const result = new FizzBuzzComponent().computeFizzBuzz(incomingData);
    expect(result).toEqual([[expectedValue]]);
  }));

  it('computeFizzBuzz should match Sample Output when passed Sample Input', async(() => {
    const expectedValue =
      [
        ['Divided 1 by 3', 'Divided 1 by 5']        
      ];
    const incomingData = ["1"];
    const result = new FizzBuzzComponent().computeFizzBuzz(incomingData);
    expect(result).toEqual(expectedValue);
  }));

  it('computeFizzBuzz should match Sample Output when passed Sample Input', async(() => {
    const expectedValue =
      [
        ['Fizz'],
      ];
    const incomingData = ["3"];
    const result = new FizzBuzzComponent().computeFizzBuzz(incomingData);
    expect(result).toEqual(expectedValue);
  }));


  it('computeFizzBuzz should match Sample Output when passed Sample Input', async(() => {
    const expectedValue =
      [
        [
          "Divided 1 by 3",
          "Divided 1 by 5"
        ],
        [
          "Fizz"
        ],
        [
          "Buzz"
        ],
        [
          "Invalid Item"
        ],
        [
          "FizzBuzz"
        ],
        [
          "Invalid Item"
        ],
        [
          "Divided 23 by 3",
          "Divided 23 by 5"
        ]
      ]
    const incomingData = ["1", "3", "5", "", "15", "A", "23"];   
    const result = new FizzBuzzComponent().computeFizzBuzz(incomingData);
    console.dir(result);
    expect(result).toEqual(expectedValue);
  }));

});
