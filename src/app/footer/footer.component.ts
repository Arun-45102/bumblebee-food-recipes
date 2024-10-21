import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  faHeart = faHeart;
  currentYear: number = 0;

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
