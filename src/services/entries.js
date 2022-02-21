import { client, checkError } from './client';

export async function fetchEntries() {
  const resp = await client.from('entries').select('*');
  return checkError(resp);
}

export async function createEntry(entry) {
  const resp = await client.from('entries').insert(entry);
  return checkError(resp);
}
