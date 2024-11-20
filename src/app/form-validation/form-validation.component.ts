
import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'form-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {
  @Input() control: AbstractControl | null = null;

  get errorMessages(): string[] {
    if (!this.control || !this.control.errors) {
      return [];
    }

    const errors: ValidationErrors = this.control.errors;
    const messages: string[] = [];

    if (errors['required']) {
      messages.push('This field is required');
    }
    if (errors['minlength']) {
      messages.push(`Minimum length is ${errors['minlength'].requiredLength}`);
    }
    if (errors['maxlength']) {
      messages.push(`Maximum length is ${errors['maxlength'].requiredLength}`);
    }
    

    return messages;
  }
}