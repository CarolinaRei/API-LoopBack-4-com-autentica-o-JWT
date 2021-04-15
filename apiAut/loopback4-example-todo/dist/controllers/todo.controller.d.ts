import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Todo } from '../models';
import { TodoRepository } from '../repositories';
import { Geocoder } from '../services';
export declare class TodoController {
    todoRepository: TodoRepository;
    protected geoService: Geocoder;
    constructor(todoRepository: TodoRepository, geoService: Geocoder);
    create(todo: Omit<Todo, 'id'>): Promise<Todo>;
    findById(id: number, filter?: FilterExcludingWhere<Todo>): Promise<Todo>;
    find(filter?: Filter<Todo>): Promise<Todo[]>;
    replaceById(id: number, todo: Todo): Promise<void>;
    updateById(id: number, todo: Todo): Promise<void>;
    deleteById(id: number): Promise<void>;
    count(where?: Where<Todo>): Promise<Count>;
    updateAll(todo: Todo, where?: Where<Todo>): Promise<Count>;
}
