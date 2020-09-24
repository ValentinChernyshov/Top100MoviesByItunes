import {Injectable} from '@angular/core';
import {PageEvent} from '@angular/material';
import {Subject} from 'rxjs';

@Injectable()
export class PaginatorService {

  public paginatorSubject = new Subject<any>();

  public getStartIndex($event: PageEvent): number {
    return $event.pageIndex * $event.pageSize;
  }

  public getEndIndex($event: PageEvent): number {
    return ($event.pageIndex + 1) * $event.pageSize;
  }

  set paginationAction($event) {
    this.paginatorSubject.next($event);
  }

}
