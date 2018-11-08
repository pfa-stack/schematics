import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { Schema } from './schema';

// SchematicTestRunner needs an absolute path to the collection to test.
const collectionPath = path.join(__dirname, '../collection.json');

describe('builder', () => {
  const builderName = 'my-builder';
  const schematicName = 'builder';
  const runner = new SchematicTestRunner('schematics', collectionPath);

  it('should require required option', () => {
    expect(() =>
      runner.runSchematic(schematicName, {}, Tree.empty())
    ).toThrow();
  });

  it('should work with only a name', () => {
    const tree = runner.runSchematic<Schema>(
      schematicName,
      { name: builderName },
      Tree.empty()
    );

    expect(tree.files).toContain(`/${builderName}/builders.json`);
  });

  it('should save to the path provided', () => {
    const path = 'my-path';
    const tree = runner.runSchematic<Schema>(
      schematicName,
      { name: builderName, path: path },
      Tree.empty()
    );

    expect(tree.files).toContain(`/${path}/builders.json`);
  });

  it('should generate 14 files', () => {
    const tree = runner.runSchematic<Schema>(
      schematicName,
      { name: builderName },
      Tree.empty()
    );

    expect(tree.files.length).toEqual(14);
  });
});
