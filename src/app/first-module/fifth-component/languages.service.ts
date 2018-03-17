import { Injectable } from '@angular/core';

@Injectable()
export class LanguagesService {
  constructor() { }

  public getLanguages(): string[] {
    return ['Aspnet c#', 'Aspnet core C#', 'nodeJS', 'Typescript', 'Angular 2'];
  }
}
