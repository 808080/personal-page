import { writable } from 'svelte/store';

export const companies = [
  'TESLA S.R.L.',
  'Company 1',
  'Company 2',
  'Another company',
];

const company = writable(companies[0]);

export default company;