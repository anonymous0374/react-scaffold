import { get } from 'utilities/http';

export function getUserList() {
  return get('/ams/users');
}
