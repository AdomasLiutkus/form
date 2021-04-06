import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SecondStepForm } from 'src/app/model/second-step-form';
import { SelectItem } from 'src/app/model/select-item';
import { StoreService } from 'src/app/service/store.service';
import { BaseStepComponent } from '../base-step-component';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent extends BaseStepComponent implements OnInit {
  @Input()
  form: SecondStepForm = new SecondStepForm();
  @Output()
  formChange: EventEmitter<SecondStepForm> = new EventEmitter<SecondStepForm>();
  formGroup = this.fb.group({
    type: [null, Validators.required],
    roomCount: [null, Validators.required],
    constructionYear: [null, Validators.required],
    energyClass: [null, Validators.required]
  });

  typeList: SelectItem[] = [];
  roomCountList: SelectItem[] = [];
  constructionYearList: SelectItem[] = [];
  energyClassList: SelectItem[] = [];

  constructor(
    private fb: FormBuilder,
    private store: StoreService  
  ) { 
    super();
  }

  ngOnInit(): void {
    this.store.typeList.subscribe(o => this.typeList = o);
    this.store.roomCountList.subscribe(o => this.roomCountList = o);
    this.store.constructionYearList.subscribe(o => this.constructionYearList = o);
    this.store.energyClassList.subscribe(o => this.energyClassList = o);
  }

  validate(valid: boolean) {
    this.formChange.emit(this.formGroup.value as SecondStepForm)

    this.goNext(valid);
  }
}
