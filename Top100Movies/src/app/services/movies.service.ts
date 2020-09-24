import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {RestService} from './rest.service';

@Injectable()
export class MoviesService {

  public listOfMovies = new Subject<any>();
  public moviesToShaw = new Subject<any>();

  set moviesList(list: Array<object>) {
    this.listOfMovies.next(list);
  }

  set setMoviesToShaw(array) {
    this.moviesToShaw.next(array);
  }

  constructor(private restService: RestService) { }

  public getTop100ItunesMovies(): Observable<any> {
    return this.restService.get(`us/rss/topmovies/limit=100/json`);
  }

}
