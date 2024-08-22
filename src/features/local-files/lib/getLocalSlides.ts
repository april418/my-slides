import {readdir} from 'fs/promises';
import {resolve} from 'path';

export async function getLocalSlides() {
  const slides = await readdir(resolve(process.cwd(), 'slides'));
  return slides;
}
