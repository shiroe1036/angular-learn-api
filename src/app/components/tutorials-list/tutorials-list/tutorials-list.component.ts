import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {
  tutorials: any;
  initialTutorial = {
    _id: null,
    title: null,
    description: null,
    published: false,
  }
  currentTutorial = this.initialTutorial;
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials()
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe(data => {
        this.tutorials = data.message;
      }, error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial =  this.initialTutorial;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: any, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }
}
