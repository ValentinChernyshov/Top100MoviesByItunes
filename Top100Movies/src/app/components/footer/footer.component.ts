import {Component} from '@angular/core';
import {PageEvent} from '@angular/material';
import {PaginatorService} from '../../services/paginator.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public length: number = 100;
  public pageSize: number = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 100];
  public pageEvent: PageEvent = {
    pageIndex: 0,
    pageSize: this.pageSize,
    length: this.length
  };

  constructor(private paginatorService: PaginatorService) {
  }

  public transferPaginationAction($event?: PageEvent): any {
    this.paginatorService.paginationAction = $event;
  }

}
