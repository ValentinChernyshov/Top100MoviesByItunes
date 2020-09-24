import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {map, repeat, startWith} from 'rxjs/operators';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public myGroup = new FormGroup({});
  public myControl = new FormControl();

  public filteredOptions: Observable<string[]>;
  public options: string[];

  public moviesList;

  public listOfMoviesSubject = new Subject<any>();


  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.getPaginatorAction().subscribe(resp => {
      this.moviesList = resp;
      this.fillOptions();
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this.filter(value))
        );
      this.find();
    });
  }

  public getPaginatorAction(): Observable<any> {
    return this.moviesService.listOfMovies.asObservable();
  }

  public fillOptions(): any {
    this.options = this.moviesList.map((i: any) => {
      return i['im:name'].label;
    });
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  public find(): void {
    this.filteredOptions.subscribe(response => {
      const newList = this.moviesList.filter(movie => {
        return response.some(el => el === movie['im:name'].label);
      });
      this.moviesService.setMoviesToShaw = newList;
    });
  }


}
