import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css'],
})
export class TutorialDetailsComponent implements OnInit {
  message = "";

  initialTutorial = {
    _id: null,
    title: null,
    description: null,
    published: null,
  };

  currentTutorial = this.initialTutorial;

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id: any): void {
    this.tutorialService.getOne(id)
      .subscribe(data => {
        this.currentTutorial = data.message;
      }, error => {
        console.log(error);
      });
  }

  updatePublished(status: any): void {
    const data = {
      title: this.currentTutorial?.title,
      description: this.currentTutorial?.description,
      published: status
    };

    this.tutorialService.update(this.currentTutorial?._id, data)
      .subscribe(res => {
        this.currentTutorial.published = status;
      }, error => {
        console.log(error);
      })
  }

  updateTutorial(): void {
    this.tutorialService.update(this.currentTutorial._id, this.currentTutorial)
      .subscribe(response => {
        this.message = 'the tutorial was updated successfully';
      }, error => {
        console.log(error);
      });
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial._id)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/tutorials']);
      }, error => {
        console.log(error);
      })
  }
}
