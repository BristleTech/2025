import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'how-we-work', component: HowWeWorkComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: '**', redirectTo: '' },
];
