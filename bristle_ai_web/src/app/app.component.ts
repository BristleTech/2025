import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { PartnersComponent } from './partners/partners.component';
import { ServicesComponent } from './services/services.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  ],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activeComponent: string = 'home';
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
