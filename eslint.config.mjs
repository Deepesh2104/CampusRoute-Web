import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            { sourceTag: 'type:app', onlyDependOnLibsWithTags: ['*'] },
            { sourceTag: 'scope:shared', onlyDependOnLibsWithTags: [] },
            { sourceTag: 'scope:core', onlyDependOnLibsWithTags: ['scope:shared'] },
            { sourceTag: 'scope:marketing', onlyDependOnLibsWithTags: ['scope:shared', 'scope:core'] },
            {
              sourceTag: 'scope:domain-discover',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:core', 'type:models'],
            },
            {
              sourceTag: 'scope:domain-finance',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:core', 'type:models'],
            },
            { sourceTag: 'scope:domain-profile', onlyDependOnLibsWithTags: ['scope:shared', 'scope:core'] },
            {
              sourceTag: 'scope:domain-admissions',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:core', 'type:models'],
            },
            {
              sourceTag: 'scope:domain-documents',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:core', 'scope:domain-admissions'],
            },
            {
              sourceTag: 'scope:domain-parent',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:core', 'scope:domain-admissions'],
            },
            { sourceTag: 'scope:platform', onlyDependOnLibsWithTags: ['scope:shared', 'scope:core'] },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
