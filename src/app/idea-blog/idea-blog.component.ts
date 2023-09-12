import { Component, OnInit } from '@angular/core';
import { Idea } from './idea.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IdeasService } from '../ideas.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-idea-blog',
  templateUrl: './idea-blog.component.html',
  styleUrls: ['./idea-blog.component.scss'],
})
export class IdeaBlogComponent implements OnInit {
  isFetchingIdeas = false;
  ideasStash: Idea[] = [
    /*   new Idea(
      'Test User',
      'Mi idea es una app donde se puedan registrar nuevas ideas'
    ),  */
  ];

  constructor(
    private http: HttpClient,
    private ideasService: IdeasService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.fetchIdeas();
  }

  onSharedIdea(ideaData: { content: string; createdBy: string }) {
    let ideaToSend = new Idea(ideaData.createdBy, ideaData.content);
    this.ideasService.guardarIdea(ideaToSend).subscribe(
      (reponseData) => {
        //console.log(reponseData);
        //una vez que se guardo la nueva idea se hace request del log de ideas para actualizar las ideas en el Blog-Log
        this.modalService.openNotificationModal(
          'Exito',
          'Tu idea fue guardada correctamente'
        );
        this.fetchIdeas();
      },
      (error) => {
        this.modalService.openNotificationModal(
          'Error',
          'Ocurrio un error al intentar guardar tu idea: ' + error.message
        );
      }
    );
  }

  private fetchIdeas() {
    this.isFetchingIdeas = true;

    this.ideasService.obtenerIdeas().subscribe((ideas) => {
      this.ideasStash = ideas;
    });
  }
}
