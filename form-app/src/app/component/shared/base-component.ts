import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";

@Injectable()
export abstract class BaseComponent {
    subscriptionList: Subscription[] = [];

    unsubscribeAll() : void {
        this.subscriptionList.forEach(o => o.unsubscribe());
    }
}