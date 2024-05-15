import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as process from 'node:process';

const envFile = path.resolve(`.env.${process.env.NODE_ENV}`);
dotenv.config({ path: envFile });

const generalDataSourceOptions = {
  synchronize: false,
  database: process.env.DATABASE_NAME,
  migrations: [__dirname + '/../migrations/*.ts'],
};

const developmentDataSourceOptions: DataSourceOptions = {
  ...generalDataSourceOptions,
  type: 'sqlite',
  entities: ['**/*.entity.js'],
};

const testDataSourceOptions: DataSourceOptions = {
  ...generalDataSourceOptions,
  type: 'sqlite',
  entities: ['**/*.entity.ts'],
  migrationsRun: true,
};

const prodDataSourceOptions: DataSourceOptions = {
  ...generalDataSourceOptions,
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  logging: true,
  ssl: {
    rejectUnauthorized: false,
  },
  migrationsRun: true,
  entities: ['**/*.entity.js'],
};

export const datasourceOptions =
  process.env.NODE_ENV === 'development'
    ? developmentDataSourceOptions
    : process.env.NODE_ENV === 'test'
      ? testDataSourceOptions
      : process.env.NODE_ENV === 'prod' && prodDataSourceOptions;

const dataSource = new DataSource(datasourceOptions);
export default dataSource;
