import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password: string = '';
  length: number = 0;
  defaultLength: number = 0;

  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  modifyLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  modifyLetters() {
    this.includeLetters = !this.includeLetters;

    if (this.includeLetters === true) {
      console.log('Letters included');
    } else {
      console.log('Letters not included');
    }
  }

  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;

    if (this.includeNumbers === true) {
      console.log('Numbers included');
    } else {
      console.log('Numbers not included');
    }
  }

  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;

    if (this.includeSymbols === true) {
      console.log('Symbols included');
    } else {
      console.log('Symbols not included');
    }
  }

  buttonClick() {
    const numbers: string = '1234567890';
    const letters: string = 'abcdefghijklmnopqrstuvwyz';
    const symbols: string = '!@#$%#^&*()';

    let validationChars = '';

    if (this.includeLetters) {
      validationChars += letters;
    }

    if (this.includeNumbers) {
      validationChars += numbers;
    }

    if (this.includeSymbols) {
      validationChars += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validationChars.length);
      generatedPassword += validationChars[index];
    }

    this.password = generatedPassword;
  }
}
