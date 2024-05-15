import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';

const envFile = path.resolve(`.env.${process.env.NODE_ENV}`);
dotenv.config({ path: envFile });

const generalDataSourceOptions = {
  synchronize: false,
  database: process.env.DATABASE_NAME,
  migrations: [__dirname + '/../migrations/*.ts'],
};

export const developmentDataSourceOptions: DataSourceOptions = {
  ...generalDataSourceOptions,
  type: 'sqlite',
  entities: ['**/*.entity.js'],
};

export const testDataSourceOptions: DataSourceOptions = {
  ...generalDataSourceOptions,
  type: 'sqlite',
  entities: ['**/*.entity.ts'],
  migrationsRun: true,
};

export const prodDataSourceOptions: DataSourceOptions = {
  ...generalDataSourceOptions,
  type: 'sqlite',
  entities: ['**/*.entity.ts'],
  migrationsRun: true,
};

const sourceForExport =
  process.env.NODE_ENV === 'development'
    ? developmentDataSourceOptions
    : process.env.NODE_ENV === 'test'
      ? testDataSourceOptions
      : process.env.NODE_ENV === 'prod' && prodDataSourceOptions;

const dataSource = new DataSource(sourceForExport);
export default dataSource;
