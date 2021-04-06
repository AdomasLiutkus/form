import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { IntroComponent } from './component/intro/intro.component';
import { SummaryComponent } from './component/summary/summary.component';
import { FirstStepComponent } from './component/step/first-step/first-step.component';
import { SecondStepComponent } from './component/step/second-step/second-step.component';
import { ThirdStepComponent } from './component/step/third-step/third-step.component';
import { FourthStepComponent } from './component/step/fourth-step/fourth-step.component';
import { ToolbarComponent } from './component/shared/toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { CanActivateForm } from './guard/can-activate-form';
import { CanActivateSummary } from './guard/can-activate-summary';
import { ConfirmDialogComponent } from './component/shared/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    IntroComponent,
    SummaryComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    FourthStepComponent,
    ToolbarComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatSliderModule,
    MatDialogModule
  ],
  providers: [CanActivateForm, CanActivateSummary],
  bootstrap: [AppComponent]
})
export class AppModule { }
