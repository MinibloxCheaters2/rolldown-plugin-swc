import type { Plugin } from 'rolldown';
import type { Options as SWCOptions } from '@swc/core';
import { transform } from '@swc/core';
import { merge } from 'smob';

export function swc(input: SWCOptions = {}): Plugin {
  const defaults: SWCOptions = {
    jsc: {
      target: 'es2020',
      parser: {
        syntax: 'typescript',
        decorators: true
      },
      transform: {
        decoratorMetadata: true,
        legacyDecorator: true
      },
      loose: true
    }
  };

  if (input?.env) {
    delete defaults.jsc?.target;
  }

  const swcOptions: SWCOptions = merge({}, input ?? {}, defaults);

  return {
    name: 'swc',
    transform(code, id) {
      return transform(code, {
        ...swcOptions,
        sourceMaps: true,
        filename: id
      });
    }
  };
}
