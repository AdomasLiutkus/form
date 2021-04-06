import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './component/form/form.component';
import { IntroComponent } from './component/intro/intro.component';
import { SummaryComponent } from './component/summary/summary.component';
import { CanActivateForm } from './guard/can-activate-form';
import { CanActivateSummary } from './guard/can-activate-summary';

const routes: Routes = [
  { path: 'form', component: FormComponent, canActivate: [CanActivateForm] },
  { path: 'intro', component: IntroComponent },
  { path: 'summary', component: SummaryComponent, canActivate: [CanActivateSummary] },
  { path: '**', redirectTo: '/intro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
