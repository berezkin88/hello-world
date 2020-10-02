import { PasswordValidator } from './password.validators';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.sass']
})
export class ChangePasswordFormComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldpassword: [
        '',
        Validators.required,
        PasswordValidator.shouldNotBeSame
      ],
      newpassword: ['', [Validators.required, PasswordValidator.shouldNotBeAsOld]],
      confirmpassword: ['', Validators.required]
    }, {
      validators: PasswordValidator.shouldMatch
    });
   }

   get oldpassword() {
     return this.form.get('oldpassword');
   }

   get newpassword() {
    return this.form.get('newpassword');
   }

   get confirmpassword() {
    return this.form.get('confirmpassword');
   }

}
