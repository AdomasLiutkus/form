import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MainForm } from '../model/main-form';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private nameBS: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  private resultBS: BehaviorSubject<MainForm | undefined> = new BehaviorSubject<MainForm | undefined>(undefined);

  constructor() { }

  setName(name: string | undefined) {
    this.nameBS.next(name);
  }

  get name() : Observable<string | undefined> {
    return this.nameBS.asObservable();
  }

  setResult(form: MainForm | undefined) {
    this.resultBS.next(form);
  }

  get result() : Observable<MainForm | undefined> {
    return this.resultBS.asObservable();
  }
}
