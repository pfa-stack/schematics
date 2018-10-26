import {
  Builder,
  BuilderConfiguration,
  BuilderContext
} from '@angular-devkit/architect';
import { getSystemPath } from '@angular-devkit/core';
import { WebpackBuilder } from '@angular-devkit/build-webpack';

export default class MyBuilder implements Builder<any> {
  webpackBuilder: WebpackBuilder;

  root: string;

  constructor(private context: BuilderContext) {
    this.webpackBuilder = new WebpackBuilder(this.context);
    this.root = getSystemPath(this.context.workspace.root);
  }

  run(builderConfig: BuilderConfiguration<any>) {
    return this.webpackBuilder.runWebpack(builderConfig.options, _ => {});
  }
}
