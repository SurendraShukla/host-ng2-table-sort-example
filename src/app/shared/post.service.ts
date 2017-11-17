import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {

    constructor (private http: Http) {}

    getAllPosts(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map( res => res.json());
    }

}
