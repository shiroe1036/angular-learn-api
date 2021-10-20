import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TutorialsListComponent } from './components/tutorial/tutorials-list/tutorials-list.component';
// import { TutorialDetailsComponent } from './components/tutorial/tutorial-details/tutorial-details.component';
// import { AddTutorialComponent } from './components/tutorial/add-tutorial/add-tutorial.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'tutorials',
    loadChildren: () =>
      import('./components/tutorial/tutorial.module').then(
        (m) => m.TutorialModule
      ),
  },
  // { path:'tutorials', component: TutorialsListComponent },
  // { path: 'tutorials/:id', component: TutorialDetailsComponent },
  // { path: 'add', component: AddTutorialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
