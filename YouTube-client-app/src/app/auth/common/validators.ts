import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const EMAIL_REGEX =
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;

export function customPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control?.value as string;

    const hasMinLength = value?.length >= 8;
    const hasMixtureOfCases = /[A-Z]/.test(value) && /[a-z]/.test(value);
    const hasLettersAndNumbers = /[a-zA-Z]+.*\d+|\d+.*[a-zA-Z]+/.test(value);
    const hasSpecialCharacter = /[!@#?]/.test(value);

    const isValid =
      hasMinLength &&
      hasMixtureOfCases &&
      hasLettersAndNumbers &&
      hasSpecialCharacter;

    const recommendations = [];

    if (!hasMinLength) recommendations.push('Use at least 8 characters');
    if (!hasMixtureOfCases)
      recommendations.push(
        'Include a mixture of uppercase and lowercase letters',
      );
    if (!hasLettersAndNumbers)
      recommendations.push('Include a mixture of letters and numbers');
    if (!hasSpecialCharacter)
      recommendations.push('Include at least one special character (! @ # ?)');

    return isValid
      ? null
      : {
          passwordStrength: {
            message: "Your password isn't strong enough",
            recommendations,
          },
        };
  };
}
