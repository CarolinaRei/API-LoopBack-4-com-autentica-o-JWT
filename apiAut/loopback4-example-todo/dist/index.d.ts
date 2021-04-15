import { ApplicationConfig, TodoListApplication } from './application';
export * from '@loopback/rest';
export * from './application';
export * from './models';
export * from './repositories';
export declare function main(options?: ApplicationConfig): Promise<TodoListApplication>;
