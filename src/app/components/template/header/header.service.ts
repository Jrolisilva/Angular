import { Headerdata } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<Headerdata>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerdata(): Headerdata {
    return this._headerData.value
  }
  set headerData(headerData: Headerdata){
    this._headerData.next(headerData)
  }
}
