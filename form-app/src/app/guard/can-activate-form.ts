import { Route } from "@angular/compiler/src/core";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { MainForm } from "../model/main-form";
import { SessionService } from "../service/session.service";

@Injectable()
export class CanActivateForm implements CanActivate {
  name: string | undefined = undefined;
  
    constructor(
      protected sessionService: SessionService,
      protected router: Router
  ) {
    this.sessionService.name.subscribe(o => this.name = o);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    if(this.name) {
        return of(true);
    }
    
    this.router.navigate(['intro'])
    return of(false);
  }
}