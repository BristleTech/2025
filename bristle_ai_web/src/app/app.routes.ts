import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { PartnersComponent } from './partners/partners.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'how-we-work', component: HowWeWorkComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: '**', redirectTo: '' },
];
