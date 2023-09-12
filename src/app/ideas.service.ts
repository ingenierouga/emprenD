import { Injectable } from '@angular/core';
import { Idea } from './idea-blog/idea.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class IdeasService {
  constructor(private http: HttpClient) {}

  guardarIdea(ideaData: { content: string; createdBy: string }) {
    const ideaToSend = new Idea(ideaData.createdBy, ideaData.content);

    return this.http.post(
      'https://emprend-default-rtdb.firebaseio.com/ideas.json',
      JSON.stringify(ideaToSend)
    );
  }

  obtenerIdeas() {
    return this.http
      .get('https://emprend-default-rtdb.firebaseio.com/ideas.json')
      .pipe(
        map((responseData: any) => {
          //ideasStash: Idea[] = [
          /*   new Idea(
            'Test User',
            'Mi idea es una app donde se puedan registrar nuevas ideas'
          ), */
          //];
          const ideasArray: Idea[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              //console.log(key);
              ideasArray.push(
                new Idea(
                  responseData[key].createdBy,
                  responseData[key].content,
                  key,
                  responseData[key].timeStamp
                )
              );
            }
          }
          return ideasArray;
        })
      );
  }
}
