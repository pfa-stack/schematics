import {
  apply,
  mergeWith,
  move,
  Rule,
  SchematicsException,
  template,
  url
} from '@angular-devkit/schematics';
import { Schema as BuilderOptions } from './schema';

export default function(options: BuilderOptions): Rule {
  if (!options.name) {
    throw new SchematicsException('Option (name) is required.');
  }

  if (!options.path) {
    options.path = options.name;
  }

  return mergeWith(
    apply(url('./files'), [
      template({
        name: options.name
      }),
      move(options.path)
    ])
  );
}
