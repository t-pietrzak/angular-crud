import { Component, OnInit } from '@angular/core';
import { ActionsService } from 'src/app/service/actions.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts: any;

  constructor(private actionsService: ActionsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.actionsService.getAll().snapshotChanges().pipe(
      map(action => action.map(val => 
          ({key: val.payload.key, ...val.payload.val()})
        ))
    ).subscribe(data => {
      this.posts = data;
    })
  }

}
