import { Options } from '@swc/core';
import type { Plugin } from 'rolldown';

/**
 * A Rolldown plugin to transpile TypeScript/JavaScript with the speedy-web-compiler (swc).
 *
 * @param options - SWC options. Use rolldown's `withFilter` if you need the old filter options.
 * @returns Plugin instance.
 */
export default function swc(options?: Options): Plugin;
