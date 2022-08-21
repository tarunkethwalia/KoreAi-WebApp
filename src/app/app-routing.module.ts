import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTemplatesComponent } from './components/create-templates/create-templates.component';
import { SavedTemplatesComponent } from './components/saved-templates/saved-templates.component';
import { ShowTemplatesComponent } from './components/show-templates/show-templates.component';

const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'create', component: CreateTemplatesComponent },
  { path: 'show', component: ShowTemplatesComponent },
  { path: 'posts', component: SavedTemplatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
