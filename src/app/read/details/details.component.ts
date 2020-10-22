import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { ActionsService } from '../../service/actions.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: string;
  post: any;

  constructor(private route:ActivatedRoute, private actionsService: ActionsService, private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getPost(this.id);
  }

  getPost(id:string) {
    this.actionsService.get(id).snapshotChanges().subscribe(data =>{
      this.post = {key: data.key, ...data.payload.val()}
    });
  }
}
