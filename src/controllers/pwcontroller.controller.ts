import {Count, CountSchema, Filter, FilterExcludingWhere, repository, Where} from '@loopback/repository';
import {del, get, getModelSchemaRef, param, patch, post, put, requestBody} from '@loopback/rest';
import {Pwapi} from '../models';
import {PwapiRepository} from '../repositories';

export class PwcontrollerController {
  constructor(
    @repository(PwapiRepository)
    public pwapiRepository: PwapiRepository,
  ) {}





  @post('/pwapis', {
    responses: {
      '200': {
        description: 'Pwapi model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pwapi)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pwapi, {
            title: 'NewPwapi',
            exclude: ['id'],
          }),
        },
      },
    })
    pwapi: Omit<Pwapi, 'id'>,
  ): Promise<Pwapi> {
    return this.pwapiRepository.create(pwapi);
  }

  @get('/pwapis/count', {
    responses: {
      '200': {
        description: 'Pwapi model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Pwapi) where?: Where<Pwapi>,
  ): Promise<Count> {
    return this.pwapiRepository.count(where);
  }

  @get('/pwapis', {
    responses: {
      '200': {
        description: 'Array of Pwapi model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Pwapi, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Pwapi) filter?: Filter<Pwapi>,
  ): Promise<Pwapi[]> {
    return this.pwapiRepository.find(filter);
  }


  //GEt all names
  @post('/pwapisall', {
    responses: {
      '200': {
        description: 'Pwapi model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pwapi)}},
      },
    },
  })
  async getonlynames(
    @requestBody({
      description: 'request object value',
      required: false,
      content: {
        'application/json': {
          schema: {type: 'object'},
        },
        'application/x-www-form-urlencoded': {
          schema: {type: 'object'},
        },
        'application/xml': {
          schema: {type: 'object'},
        },
      },
    })
    data: object,
  ): Promise<Object> {
    //custom filter
    let filter = {
      fields: {
        id: true, folder: true, title: true, notes: true
      }
    }
    return this.pwapiRepository.find(filter);
  }



  @patch('/pwapis', {
    responses: {
      '200': {
        description: 'Pwapi PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pwapi, {partial: true}),
        },
      },
    })
    pwapi: Pwapi,
    @param.where(Pwapi) where?: Where<Pwapi>,
  ): Promise<Count> {
    return this.pwapiRepository.updateAll(pwapi, where);
  }

  @get('/pwapis/{id}', {
    responses: {
      '200': {
        description: 'Pwapi model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Pwapi, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Pwapi, {exclude: 'where'}) filter?: FilterExcludingWhere<Pwapi>
  ): Promise<Pwapi> {
    return this.pwapiRepository.findById(id, filter);
  }

  @patch('/pwapis/{id}', {
    responses: {
      '204': {
        description: 'Pwapi PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pwapi, {partial: true}),
        },
      },
    })
    pwapi: Pwapi,
  ): Promise<void> {
    await this.pwapiRepository.updateById(id, pwapi);
  }

  @put('/pwapis/{id}', {
    responses: {
      '204': {
        description: 'Pwapi PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() pwapi: Pwapi,
  ): Promise<void> {
    await this.pwapiRepository.replaceById(id, pwapi);
  }

  @del('/pwapis/{id}', {
    responses: {
      '204': {
        description: 'Pwapi DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.pwapiRepository.deleteById(id);
  }
}
