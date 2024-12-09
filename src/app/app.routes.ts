import { Routes } from '@angular/router';
import { BlogListComponent } from './pages/blog-list/blog-list.component';

export const routes: Routes = [
  {path: '', redirectTo: 'blog', pathMatch:'full'},
  {path: 'blog', component: BlogListComponent}
];
