import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function noFutureDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control?.value;

    if (!value) {
      return null;
    }

    const currentDate = new Date();
    const inputDate = new Date(value);

    return inputDate > currentDate
      ? { noFutureDate: { message: 'The date is invalid' } }
      : null;
  };
}

export const YOUTUBE_VIDEO_LINK_REGEX =
  /^https:\/\/www\.youtube\.com\/watch\?v=[A-Za-z0-9_-]{11}$/;

export const TAG_REGEX = /^#[A-Za-z0-9]{2,20}$/;
