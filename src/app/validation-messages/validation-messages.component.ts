import { Component, Input } from '@angular/core';
import { AbstractControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-validation-messages',
  template: `
    <div *ngIf="control?.invalid && (control.touched || control.dirty)" class="alert alert-danger">
      <div *ngIf="control.errors?.['required']">This field is required</div>
      <div *ngIf="control.errors?.['minlength']">
        Minimum length is {{ control.errors?.['minlength'].requiredLength }}
      </div>
      <div *ngIf="control.errors?.['maxlength']">
        Maximum length is {{ control.errors?.['maxlength'].requiredLength }}
      </div>
      <div *ngIf="control.errors?.['pattern']">Invalid format</div>
    </div>
  `,
  styles: []
})
export class ValidationMessagesComponent {
  @Input() control!: AbstractControl | NgModel;
}
