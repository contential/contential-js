import { api } from '@contential/api';

export function contential(): string {
  return 'contential: ' + api();
}
