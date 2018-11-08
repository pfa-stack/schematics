import {
  BuildEvent,
  Builder,
  BuilderConfiguration,
  BuilderContext
} from '@angular-devkit/architect';
import { Observable } from 'rxjs';
import { resolve, tags } from '@angular-devkit/core';

export default class SingleBuilder implements Builder<{}> {
  constructor(public context: BuilderContext) {}

  public run(builderConfig: BuilderConfiguration<{}>): Observable<BuildEvent> {
    const root = this.context.workspace.root;
    const projectRoot = resolve(root, builderConfig.root);

    return new Observable(_ => {
      this.context.logger.info(tags.oneLine`
        **
        Single builder example.
        Project information:
        * Workspace Root: ${root}
        * Project root: ${projectRoot}
      `);
    });
  }
}
