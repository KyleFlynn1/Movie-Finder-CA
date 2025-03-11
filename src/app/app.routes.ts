import { Routes } from '@angular/router';
import { SearchtitleComponent } from './components/searchtitle/searchtitle.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path:'', component:SearchtitleComponent},
    {path: 'search', component: SearchComponent},
    {path: 'about', component: AboutComponent},
];
