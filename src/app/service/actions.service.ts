import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Post } from '../class/post'

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  private dbPath = '/posts';

  postRef: AngularFireList<Post> = null;

  constructor(private db: AngularFireDatabase) {
    this.postRef = db.list(this.dbPath);
  }

  create(post: Post): any {
    return this.postRef.push(post);
  }

  getAll(): AngularFireList<Post> {
    return this.postRef;
  }
}
