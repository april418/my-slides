'use server';

import {readFile} from 'fs/promises';
import {resolve} from 'path';

type Params = {
  filename: string;
};

export async function getSlide({filename}: Params) {
  const file = await readFile(resolve(process.cwd(), `slides/${filename}`));
  return file.toString();
}
