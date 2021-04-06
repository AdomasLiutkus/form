import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FourthStepForm } from 'src/app/model/fourth-step-form';
import { SelectItem } from 'src/app/model/select-item';
import { SelectItemBoolean } from 'src/app/model/select-item-boolean';
import { SelectItemCategory } from 'src/app/model/select-item-category';
import { StoreService } from 'src/app/service/store.service';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { BaseStepComponent } from '../base-step-component';

@Component({
  selector: 'app-fourth-step',
  templateUrl: './fourth-step.component.html',
  styleUrls: ['./fourth-step.component.scss']
})
export class FourthStepComponent extends BaseStepComponent implements OnInit {
  @Input()
  form: FourthStepForm = new FourthStepForm();
  @Output()
  formChange: EventEmitter<FourthStepForm> = new EventEmitter<FourthStepForm>();
  @Output()
  finished: EventEmitter<any> = new EventEmitter<any>();
  formGroup = this.fb.group({
    review: [null, Validators.required],
    reviewFollowup: [null, Validators.required],
    otherReason: [null, Validators.required],
    wouldRecommend: [null, Validators.required]
  });

  displayOther: boolean = false;
  reviewFirstList: SelectItem[] = [];
  reviewSecondList: SelectItemCategory[] = [];
  booleanList: SelectItemBoolean[] = [];

  reviewFollowupList: SelectItemCategory[] = [];

  constructor(
    private fb: FormBuilder,
    private store: StoreService,
    public dialog: MatDialog
  ) { 
    super();
  }

  ngOnInit(): void {
    this.store.booleanList.subscribe(o => this.booleanList = o);
    this.store.reviewFirstList.subscribe(o => this.reviewFirstList = o);
    this.store.reviewSecondList.subscribe(o => this.reviewSecondList = o);
  }

  removeFormContorl(name: string) {
    if(this.formGroup.controls[name])
      this.formGroup.controls[name].setErrors(null);
  }

  reviewSelected() {
    let form: FourthStepForm = this.formGroup.value as FourthStepForm;
    
    this.reviewFollowupList = this.reviewSecondList.filter(o => o.category == form.review || o.category == 0);
  }

  reviewSecondSelected() {
    let form: FourthStepForm = this.formGroup.value as FourthStepForm;

    this.displayOther = this.reviewFollowupList.find(o => o.id == form.reviewFollowup)?.category == 0;
  }

  showConfirmation() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '200px'
    });

    dialogRef.afterClosed().subscribe(o => {
      if(o)
        this.validate();
    })
  }

  validate() {
    let form: FourthStepForm = this.formGroup.value as FourthStepForm;

    this.formChange.emit(form);

    if(!this.displayOther)
      this.removeFormContorl('otherReason');

    if(this.formGroup.valid)
    {
      this.finished.emit();
    }
  }
}
