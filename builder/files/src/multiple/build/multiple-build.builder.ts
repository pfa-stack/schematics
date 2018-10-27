import {
  BuildEvent,
  Builder,
  BuilderConfiguration,
  BuilderContext
} from '@angular-devkit/architect';
import { Observable } from 'rxjs';
import { resolve, tags, virtualFs } from '@angular-devkit/core';
import { Stats } from 'fs';

export interface MultipleBuilderBuildOptions {
  name: string;
}

export default class MultipleBuilderBuild
  implements Builder<MultipleBuilderBuildOptions> {
  constructor(public context: BuilderContext) {}

  public run(
    builderConfig: BuilderConfiguration<MultipleBuilderBuildOptions>
  ): Observable<BuildEvent> {
    const options = builderConfig.options;
    const root = this.context.workspace.root;
    const projectRoot = resolve(root, builderConfig.root);
    const host = new virtualFs.AliasHost(this.context.host as virtualFs.Host<
      Stats
    >);

    return new Observable(_ => {
      this.context.logger.info(tags.oneLine`
        **
        Multiple builder build example. You chose the name ${options.name}.
        Project information:
        * Workspace Root: ${root}
        * Project root: ${projectRoot}
        * Host: ${host}
      `);
    });
  }
}
