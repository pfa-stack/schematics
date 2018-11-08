import { normalize } from '@angular-devkit/core';
import { TestLogger } from '@angular-devkit/architect/testing';
import SingleBuilder from './single.builder';

describe('Single Builder', () => {
  let builder: SingleBuilder;
  const testOptions = {};

  beforeEach(() => {
    builder = new SingleBuilder({
      host: <any>{},
      logger: new TestLogger('test'),
      workspace: <any>{
        root: '/root'
      },
      architect: <any>{}
    });
  });

  it('should work', async () => {
    const result = await builder.run({
      root: normalize('/root'),
      projectType: 'application',
      builder: 'my-project:single-builder',
      options: testOptions
    });

    expect(result).toBeTruthy();
  });
});
