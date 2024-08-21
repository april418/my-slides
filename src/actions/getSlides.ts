'use server';

import {readdir} from 'fs/promises';
import {resolve} from 'path';

export async function getSlides() {
  const path = resolve(process.cwd(), 'slides');
  return await readdir(path);
}
