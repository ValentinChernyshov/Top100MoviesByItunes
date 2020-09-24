import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RestService} from './services/rest.service';
import {MoviesService} from './services/movies.service';
import {CardComponent} from './components/card-lists/card/card.component';
import {PaginatorService} from './services/paginator.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { ListOfCardsComponent } from './components/card-lists/list-of-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ListOfCardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule
  ],
  providers: [
    RestService,
    MoviesService,
    PaginatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
