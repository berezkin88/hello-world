import { AbstractControl, ValidationErrors, ValidatorFn, FormControl } from '@angular/forms';

export class PasswordValidator {
    static shouldMatch(control: AbstractControl) {
        let newPassword = control.get('newpassword');
        let confirmPassword = control.get('confirmpassword');

        if (newPassword.value !== confirmPassword.value) {
            return { shouldMatch: true };
        }
        return null;
    }

    static shouldNotBeAsOld(control: AbstractControl): ValidationErrors | null {
        if (control.value === 'password') {
            return { shouldNotBeAsOld: true };
        }
        return null;
    }

    static shouldNotBeSame(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== 'password') {
                    resolve({ shouldNotBeSame: true });
                } else {
                    resolve(null);
                }
            }, 1000);
        });
    }
}
