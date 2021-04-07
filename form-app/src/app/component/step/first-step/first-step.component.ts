import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FirstStepForm } from 'src/app/model/first-step-form';
import { BaseStepComponent } from '../base-step-component';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent extends BaseStepComponent implements OnInit {
  @Input()
  form: FirstStepForm = new FirstStepForm();
  @Output()
  formChange: EventEmitter<FirstStepForm> = new EventEmitter<FirstStepForm>();

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

  euroLabel(value: number) : string {
    return value + ' €';
  }

  yearLabel(value: number) : string {
    return value + ' metai'
  }
  
  validate() {
    this.goNext(true);
  }
}
