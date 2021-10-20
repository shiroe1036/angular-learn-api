import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialsListComponent
  },
  {
    path: 'details/:id',
    component: TutorialDetailsComponent,
  },
  {
    path: 'tuto/add',
    component: AddTutorialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
