import { Component, HostListener } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { PartnersComponent } from './partners/partners.component';
import { ServicesComponent } from './services/services.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SliderComponent } from './home/slider/slider.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HomeComponent,
    ContactUsComponent,
    HowWeWorkComponent,
    PartnersComponent,
    ServicesComponent,
    CommonModule,
    RouterModule,
    SliderComponent,
  ],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bristle_ai_web';
  activeComponent: string = 'home';
  isMenuOpen = false;
  currentBg = 'gradient-1';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isMenuOpen = false;
        this.updateBackground();
      });
  }

  private updateBackground() {
    const backgrounds = ['gradient-1', 'gradient-2', 'gradient-3'];
    this.currentBg =
      backgrounds[Math.floor(Math.random() * backgrounds.length)];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 768) {
      this.isMenuOpen = false;
    }
  }
}
