import { createAction, props } from '@ngrx/store';
import { CustomCard } from '../../youtube/interfaces/custom-card.interface';

export const createCustomCard = createAction(
  '[Admin Page] Create Custom Card',
  props<{ card: CustomCard }>(),
);

export const deleteCustomCard = createAction(
  '[Main Page/Custom Card] Delete Custom Card',
  props<{ cardId: number }>(),
);
