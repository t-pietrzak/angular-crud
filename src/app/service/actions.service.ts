import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Post } from '../class/post';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  private dbPath = '/posts';
  post: Post;

  postsRef: AngularFireList<Post> = null;
  postRef: AngularFireObject<Post>;

  constructor(private db: AngularFireDatabase) {
    this.postsRef = this.db.list(this.dbPath);
  }

  create(post: Post): any {
    return this.postsRef.push(post);
  }

  getAll(): AngularFireList<Post> {
    return this.postsRef;
  }

  get(id: string) {
    this.postRef = this.db.object('/posts/' + id);
    return this.postRef;
  }
}
