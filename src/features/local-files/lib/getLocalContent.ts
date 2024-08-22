import {readFile} from 'fs/promises';
import {resolve} from 'path';

export async function getLocalContent({filename}: {filename: string}) {
  const file = await readFile(resolve(process.cwd(), `slides/${filename}`));
  return file.toString();
}
