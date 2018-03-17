import { Component, OnInit } from '@angular/core';
import { LanguagesService } from './languages.service';

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

  constructor(private languageService: LanguagesService) {
    this.domainLanguages = this.languageService.getLanguages();
  }

  ngOnInit() {
  }
}
