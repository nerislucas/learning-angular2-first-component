import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-component',
  template: `
      <ul>
        <li *ngFor="let language of domainLanguages">
          {{language}}
        </li>
      </ul>
  `,
  styleUrls: ['./fifth-component.component.css']
})
export class FifthComponentComponent implements OnInit {
  public domainLanguages: string[];

  constructor() {
    this.domainLanguages = this.getLanguages();
  }

  ngOnInit() {
  }

  private getLanguages(): string[] {
    return ['Aspnet c#', 'Aspnet core C#', 'nodeJS', 'Typescript', 'Angular 2'];
  }

}
