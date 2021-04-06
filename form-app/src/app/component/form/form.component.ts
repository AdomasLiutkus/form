import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Event, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FirstStepForm } from 'src/app/model/first-step-form';
import { FourthStepForm } from 'src/app/model/fourth-step-form';
import { MainForm } from 'src/app/model/main-form';
import { SecondStepForm } from 'src/app/model/second-step-form';
import { ThirdStepForm } from 'src/app/model/third-step-form';
import { SessionService } from 'src/app/service/session.service';
import { BaseComponent } from '../shared/base-component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends BaseComponent implements OnInit, OnDestroy {
  name: string | undefined = undefined;
  selectedTab: number = 0;
  form: MainForm = new MainForm();

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { 
    super();
  }

  ngOnInit(): void {
    this.subscriptionList.push(this.sessionService.name.subscribe(o => this.name = o));
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  isDisabled(nr: number): boolean {
    return nr != this.selectedTab;
  }

  changeNextValid(nr: any): void {
    this.selectedTab = nr;
  }

  finished() {
    this.sessionService.setResult(this.form);
    this.router.navigate(['summary']);
  }
}
