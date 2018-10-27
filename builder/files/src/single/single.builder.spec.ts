import { normalize } from '@angular-devkit/core';
import { TestLogger } from '@angular-devkit/architect/testing';
import SingleBuilder, { SingleBuilderOptions } from './single.builder';

describe('Single Builder', () => {
  let builder: SingleBuilder;
  let testOptions: SingleBuilderOptions;

  beforeEach(() => {
    builder = new SingleBuilder({
      host: <any>{},
      logger: new TestLogger('test'),
      workspace: <any>{
        root: '/root'
      },
      architect: <any>{}
    });
    testOptions = {
      name: 'Single builder name'
    };
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
