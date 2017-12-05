import { Injectable } from '@angular/core';

@Injectable()
export class ResultsService {

  constructor() {}

  generate() {
    let result = [1,2,3,4,5,6,7,8,9];
    for (let i = result.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

}
