import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IntroForm } from 'src/app/model/intro-form';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  introForm = this.fb.group({
    name: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    protected sessionService: SessionService
  ) {}

  ngOnInit(): void {
  }

  goToForm(valid: boolean): void {
    if(valid) {
      let form: IntroForm = this.introForm.value as IntroForm;
      this.sessionService.setName(form.name)
      this.router.navigate(['form']);
    }
  }
}
