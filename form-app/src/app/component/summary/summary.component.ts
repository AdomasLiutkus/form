import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainForm } from 'src/app/model/main-form';
import { SelectItem } from 'src/app/model/select-item';
import { SelectItemBoolean } from 'src/app/model/select-item-boolean';
import { SelectItemCategory } from 'src/app/model/select-item-category';
import { SessionService } from 'src/app/service/session.service';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  form: MainForm | undefined = undefined;

  typeList: SelectItem[] = [];
  energyClassList: SelectItem[] = [];
  booleanList: SelectItemBoolean[] = [];
  reviewList: SelectItem[] = [];
  reviewFollowupList: SelectItemCategory[] = [];

  constructor(
    private sessionService: SessionService,
    private store: StoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.typeList.subscribe(o => this.typeList = o);
    this.store.energyClassList.subscribe(o => this.energyClassList = o);
    this.store.booleanList.subscribe(o => this.booleanList = o);
    this.store.reviewFirstList.subscribe(o => this.reviewList = o);
    this.store.reviewSecondList.subscribe(o => this.reviewFollowupList = o);

    this.sessionService.result.subscribe(o => {
      this.form = o
    });
  }

  getType(): string | undefined {
    return this.typeList.find(o => o.id == this.form?.secondStepForm.type)?.name;
  } 
  
  getEnergyClass(): string | undefined {
    return this.energyClassList.find(o => o.id == this.form?.secondStepForm.energyClass)?.name;
  } 

  getBoolean(value: boolean | undefined): string | undefined {
    return this.booleanList.find(o => o.id == value)?.name;
  }

  getReview(value: number | undefined): string | undefined {
    return this.reviewList.find(o => o.id == value)?.name;
  }
  
  getSecondReview(value: number | undefined): string | undefined {
    return this.reviewFollowupList.find(o => o.id == value)?.name;
  }

  reset() {
    this.sessionService.setName(undefined);
    this.sessionService.setResult(undefined);
    this.router.navigate(['intro']);
  }
}
