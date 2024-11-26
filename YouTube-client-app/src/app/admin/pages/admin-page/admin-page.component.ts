import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  noFutureDateValidator,
  YOUTUBE_VIDEO_LINK_REGEX,
  TAG_REGEX,
} from '../../common/validators';
import { CustomCard } from '../../../youtube/interfaces/custom-card.interface';
import { createCustomCard } from '../../../redux/actions/custom-cards.actions';
import { selectCustomCardsMaxLimit } from '../../../redux/selectors/video-cards.selectors';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPageComponent {
  public cardForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [Validators.maxLength(255)]),
    image: new FormControl('', [Validators.required]),
    video: new FormControl('', [
      Validators.required,
      Validators.pattern(YOUTUBE_VIDEO_LINK_REGEX),
    ]),
    date: new FormControl('', [Validators.required, noFutureDateValidator()]),
    tags: new FormArray([
      new FormControl('', [Validators.required, Validators.pattern(TAG_REGEX)]),
    ]),
  });

  public customCardsMaxLimit$ = this.store.select(selectCustomCardsMaxLimit);

  constructor(
    private store: Store,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  public get tags(): FormArray {
    return this.cardForm.get('tags') as FormArray;
  }

  public addTag(): void {
    if (this.tags.length < 5) {
      this.tags.push(
        new FormControl('', [
          Validators.required,
          Validators.pattern(TAG_REGEX),
        ]),
      );
    }
  }

  public removeTag(index: number): void {
    if (this.tags.length > 1) {
      this.tags.removeAt(index);
    }
  }

  public showAddButton(): boolean {
    return this.tags.length < 5;
  }

  public onSubmit(): void {
    if (this.cardForm.valid) {
      const customCard = { ...(this.cardForm.value as CustomCard) };
      this.store.dispatch(createCustomCard({ card: customCard }));
      this.snackBar.open('Card created', '', {
        verticalPosition: 'top',
        horizontalPosition: 'left',
        duration: 3000,
      });
      this.router.navigate(['/main']);
    }
  }

  public reset(): void {
    this.cardForm.reset();
    this.tags.clear();
    this.tags.push(
      new FormControl('', [Validators.required, Validators.pattern(TAG_REGEX)]),
    );
  }
}
