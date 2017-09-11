import { Component } from '@angular/core';

/**
 * Generated class for the BackgroundImagesComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'background-images',
  templateUrl: 'background-images.html'
})
export class BackgroundImagesComponent {

  text: string;

  constructor() {
    console.log('Hello BackgroundImagesComponent Component');
    this.text = 'Hello World';
  }

}
