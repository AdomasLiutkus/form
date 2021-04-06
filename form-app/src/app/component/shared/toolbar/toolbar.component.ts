import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SessionService } from 'src/app/service/session.service';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent extends BaseComponent implements OnInit, OnDestroy {

  name: string | undefined = undefined;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private sessionService: SessionService) {
      super();
    }

  ngOnInit() {
    this.subscriptionList.push(this.sessionService.name.subscribe(o => {
      this.name = o;
    }));
  }

  ngOnDestroy() {
    this.unsubscribeAll();
  }
  
  getDisplayName() {
    return this.name ? `, ${this.name}!` : '!';
  }
}
