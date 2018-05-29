'use strict';

const mock = require('egg-mock');

describe('test/weex-https.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/weex-https-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, weexHttps')
      .expect(200);
  });
});
