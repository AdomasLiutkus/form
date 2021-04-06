import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SelectItem } from '../model/select-item';
import { SelectItemBoolean } from '../model/select-item-boolean';
import { SelectItemCategory } from '../model/select-item-category';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(protected dataService: DataService) { }

  get typeList(): Observable<SelectItem[]> {
    return of(this.dataService.typeList());
  }
  
  get roomCountList(): Observable<SelectItem[]> {
    return of(this.dataService.roomCountList());
  }
  
  get constructionYearList(): Observable<SelectItem[]> {
    return of(this.dataService.constructionYearList());
  }
  
  get energyClassList(): Observable<SelectItem[]> {
    return of(this.dataService.energyClassList());
  }
  
  get amountList(): Observable<SelectItem[]> {
    return of(this.dataService.amountList());
  }
  
  get booleanList(): Observable<SelectItemBoolean[]> {
    return of(this.dataService.booleanList());
  }
  
  get reviewFirstList(): Observable<SelectItem[]> {
    return of(this.dataService.reviewFirstList());
  }
  
  get reviewSecondList(): Observable<SelectItemCategory[]> {
    return of(this.dataService.reviewSecondList());
  }
}
