import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'The Art Of Making';
  menuEnabled: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) { }


  socialNavigation(platform: string) {
    switch (platform) {
      case 'facebook':
        this.document.location.href = "https://www.facebook.com/andrea.dellamaggiora.58";
        break;
      case 'linkedin':
        this.document.location.href = "https://www.linkedin.com/in/andrea-della-maggiora-258087198/";
        break;
      case 'github':
        this.document.location.href = "https://github.com/AndreaDellaMaggiora";
      default:
        break;
    }
  }
}

