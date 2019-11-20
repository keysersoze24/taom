import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Scroll } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'The Art Of Making';
  menuEnabled: boolean;


  constructor(@Inject(DOCUMENT) private document: Document) { }

  scrollToElement(el: HTMLElement){
    el.scrollIntoView({behavior: 'smooth', inline: 'start', block: 'start'});
  }


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


/**
 * try into html

<div #list [scrollTop]="list.scrollHeight"></div>
Solution 2

In Component define id into html id="scrollId"

const element = document.querySelector('#scrollId');
element.scrollIntoView();
 */
