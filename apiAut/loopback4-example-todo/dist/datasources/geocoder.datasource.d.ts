import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class GeocoderDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: any;
        options: {
            headers: {
                accept: string;
                'content-type': string;
            };
            timeout: number;
        };
        operations: {
            template: {
                method: string;
                url: string;
                query: {
                    format: string;
                    benchmark: string;
                    address: string;
                };
                responsePath: string;
            };
            functions: {
                geocode: string[];
            };
        }[];
    };
    constructor(dsConfig?: object);
}
