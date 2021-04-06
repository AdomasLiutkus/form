import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'src/app/model/select-item';
import { SelectItemBoolean } from 'src/app/model/select-item-boolean';
import { ThirdStepForm } from 'src/app/model/third-step-form';
import { StoreService } from 'src/app/service/store.service';
import { BaseStepComponent } from '../base-step-component';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss']
})
export class ThirdStepComponent extends BaseStepComponent implements OnInit {
  @Input()
  form: ThirdStepForm = new ThirdStepForm();
  @Output()
  formChange: EventEmitter<ThirdStepForm> = new EventEmitter<ThirdStepForm>();
  formGroup = this.fb.group({
    children: [null, Validators.required],
    amount: [null, Validators.required],
    ageRangeFrom: [null, Validators.required],
    ageRangeTo: [null, Validators.required],
    planning: [null, Validators.required]
  });

  amountList: SelectItem[] = [];
  booleanList: SelectItemBoolean[] = [];

  constructor(
    private fb: FormBuilder,
    private store: StoreService  
  ) { 
    super();
  }

  ngOnInit(): void {
    this.store.amountList.subscribe(o => this.amountList = o);
    this.store.booleanList.subscribe(o => this.booleanList = o);
  }

  removeFormContorl(name: string) {
    if(this.formGroup.controls[name])
      this.formGroup.controls[name].setErrors(null);
  }

  validate() {
    let form: ThirdStepForm = this.formGroup.value as ThirdStepForm;
    
    if(form.children) {
      this.removeFormContorl('planning');
    }
    else {
      this.removeFormContorl('amount');
      this.removeFormContorl('ageRangeFrom');
      this.removeFormContorl('ageRangeTo');
    }
    
    this.formChange.emit(form);

    this.goNext(this.formGroup.valid)
  }
}
