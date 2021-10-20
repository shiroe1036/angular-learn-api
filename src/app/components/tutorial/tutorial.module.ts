import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TutorialsListComponent,
    TutorialDetailsComponent,
    AddTutorialComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TutorialRoutingModule,
  ]
})
export class TutorialModule { }
