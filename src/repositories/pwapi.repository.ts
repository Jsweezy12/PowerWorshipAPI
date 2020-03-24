import {DefaultCrudRepository} from '@loopback/repository';
import {Pwapi, PwapiRelations} from '../models';
import {PWdatasourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PwapiRepository extends DefaultCrudRepository<
  Pwapi,
  typeof Pwapi.prototype.id,
  PwapiRelations
> {
  constructor(
    @inject('datasources.PWdatasource') dataSource: PWdatasourceDataSource,
  ) {
    super(Pwapi, dataSource);
  }
}
