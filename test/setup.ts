import { rm } from 'fs/promises';
import { join } from 'path';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as process from 'node:process';

const envFile = path.resolve(`.env.${process.env.NODE_ENV}`);
dotenv.config({ path: envFile });

global.beforeEach(async () => {
  try {
    await rm(join(__dirname, '..', process.env.DATABASE_NAME));
  } catch (e) {}
});
