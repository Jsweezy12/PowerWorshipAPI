import {ApplicationConfig} from '@loopback/core';
import {RestBindings} from '@loopback/rest'; // import added (obviously)
import {PowerworshipapiApplication} from './application';

export {PowerworshipapiApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new PowerworshipapiApplication(options);
  await app.boot();
  await app.start();
  app.bind(RestBindings.REQUEST_BODY_PARSER_OPTIONS).to({limit: '50mb'}) // line added

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
