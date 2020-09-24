import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';
import {MoviesService} from '../../services/movies.service';
import {PaginatorService} from '../../services/paginator.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-of-cards',
  templateUrl: './list-of-cards.component.html',
  styleUrls: ['./list-of-cards.component.scss']
})
export class ListOfCardsComponent implements OnInit {

  public moviesList: Array<any> = [];
  public moviesToShown: Array<any> = [];
  public pageEvent: PageEvent = {
    pageIndex: 0,
    pageSize: 10,
    length: 100
  };
  public currentPaginatorOptions: PageEvent = this.pageEvent;

  constructor(private moviesService: MoviesService,
              private paginatorService: PaginatorService) {
  }

  ngOnInit() {
    this.getItunesTop100();
    this.getPaginatorAction().subscribe(response => {
      this.showMovies(response);
      this.currentPaginatorOptions = response;
    });
    this.getPaginatorAction2().subscribe(resp => {
      this.changeMoviesToShaw(resp);
    });
  }

  public getPaginatorAction(): Observable<any> {
    return this.paginatorService.paginatorSubject.asObservable();
  }

  public getItunesTop100(): void {
    this.moviesService.getTop100ItunesMovies().subscribe(list => {
      this.moviesList = list.feed.entry;
      this.moviesService.moviesList = this.moviesList;
      this.showMovies(this.pageEvent);
    });
  }

  public getPaginatorAction2(): Observable<any> {
    return this.moviesService.moviesToShaw.asObservable();
  }

  public showMovies($event?: PageEvent) {
    // this.moviesToShown.length = 0;
    const start = this.paginatorService.getStartIndex($event);
    const end = this.paginatorService.getEndIndex($event);
    this.moviesToShown = this.moviesList.slice(start, end);
    return $event;
  }

  public changeMoviesToShaw(array) {
    this.moviesToShown = array;
    const start = this.paginatorService.getStartIndex(this.currentPaginatorOptions);
    const end = this.paginatorService.getEndIndex(this.currentPaginatorOptions);
    this.moviesToShown = this.moviesToShown.slice(start, end);
  }


}
