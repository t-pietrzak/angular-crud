import { Component, OnInit } from '@angular/core';
import { ActionsService } from 'src/app/service/actions.service';
import { Post } from 'src/app/class/post';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  post: Post = new Post();
  submitted = false;

  constructor(private actionsService: ActionsService) { }

  ngOnInit(): void {
  }

  newPost(): void {
    this.submitted = false;
    this.post = new Post();
  }

  savePost(): void {
    this.actionsService.create(this.post).then(() => {
      console.log('Dodano nowy post!');
      this.submitted = true;
    })
  }

}
