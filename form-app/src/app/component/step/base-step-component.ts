import { Component, EventEmitter, Injectable, Input, Output } from "@angular/core";
import { MatTab } from "@angular/material/tabs";
import { BaseComponent } from "../shared/base-component";

@Component({
    template: ''
})
export abstract class BaseStepComponent extends BaseComponent {
    @Input() activeNumber: number = 0;
    @Input() stepNumber: number = 0;

    @Output() nextValidChange: EventEmitter<number> =  new EventEmitter();

    goNext(valid: boolean): void {
        if(valid)
            this.nextValidChange.emit(this.stepNumber + 1);
    }

    goBack(): void {
        this.nextValidChange.emit(this.stepNumber - 1);
    }
}