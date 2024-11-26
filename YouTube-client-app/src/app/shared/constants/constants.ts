export enum Colors {
  red = '#EB5757',
  green = '#27AE60',
  blue = '#2979FF',
  yellow = '#F2C94C',
}

// exponential notation
export enum Period {
  week = 6.048e8, // Week in milliseconds
  month = 2.6298e9, // Month in milliseconds
  halfYear = 1.57788e10, // Half a year in milliseconds
}

export enum SortTypes {
  DATE = 'date',
  VIEWS = 'views',
  UNSET = '',
}

export enum SortOrders {
  ASC = 'asc',
  DESC = 'desc',
  UNSET = '',
}

export const DEBOUNCE_TIME_IN_MS: number = 800;

export const MIN_SEARCH_VALUE_LENGTH: number = 3;
