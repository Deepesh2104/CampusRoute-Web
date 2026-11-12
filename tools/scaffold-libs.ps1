# Creates CampusRoute lib skeleton (run once from repo root)
$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent

$libs = @(
  @{ name = 'shared-ui'; dir = 'libs/shared/ui'; tags = @('scope:shared','type:ui'); depth = $false },
  @{ name = 'shared-models'; dir = 'libs/shared/models'; tags = @('scope:shared','type:models'); depth = $false },
  @{ name = 'shared-util'; dir = 'libs/shared/util'; tags = @('scope:shared','type:util'); depth = $false },
  @{ name = 'core-auth'; dir = 'libs/core/auth'; tags = @('scope:core','type:auth'); depth = $false },
  @{ name = 'core-consent'; dir = 'libs/core/consent'; tags = @('scope:core','type:consent'); depth = $false },
  @{ name = 'core-http'; dir = 'libs/core/http'; tags = @('scope:core','type:http'); depth = $false },
  @{ name = 'core-config'; dir = 'libs/core/config'; tags = @('scope:core','type:config'); depth = $false },
  @{ name = 'marketing-landing'; dir = 'libs/marketing/landing'; tags = @('scope:marketing','type:feature'); depth = $true },
  @{ name = 'domains-discover'; dir = 'libs/domains/discover'; tags = @('scope:domain-discover','type:domain'); depth = $true },
  @{ name = 'domains-finance'; dir = 'libs/domains/finance'; tags = @('scope:domain-finance','type:domain'); depth = $true },
  @{ name = 'domains-profile'; dir = 'libs/domains/profile'; tags = @('scope:domain-profile','type:domain'); depth = $true },
  @{ name = 'platform-shell'; dir = 'libs/platform/shell'; tags = @('scope:platform','type:shell'); depth = $true }
)

foreach ($lib in $libs) {
  $libRoot = Join-Path $root $lib.dir
  $src = Join-Path $libRoot 'src'
  New-Item -ItemType Directory -Force -Path $src | Out-Null
  if ($lib.depth) {
    foreach ($sub in @('api','application','data-access','domain','feature','ui')) {
      New-Item -ItemType Directory -Force -Path (Join-Path $src $sub) | Out-Null
      Set-Content (Join-Path $src "$sub\.gitkeep") ''
    }
  }

  $depth = ($lib.dir -split '/').Count
  $up = '../' * $depth
  $schema = $up + 'node_modules/nx/schemas/project-schema.json'
  $tagsJson = ($lib.tags | ForEach-Object { "`"$_`"" }) -join ', '
  @"
{
  "name": "$($lib.name)",
  "`$schema": "$schema",
  "sourceRoot": "$($lib.dir -replace '\\','/')/src",
  "projectType": "library",
  "tags": [ $tagsJson ],
  "targets": {
    "lint": { "executor": "@nx/eslint:lint" }
  }
}
"@ | Out-File (Join-Path $libRoot 'project.json') -Encoding utf8NoBOM

  $extends = $up + 'tsconfig.base.json'
  @"
{
  "extends": "$extends",
  "compilerOptions": {
    "outDir": "${up}dist/out-tsc",
    "declaration": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["src/**/*.spec.ts"]
}
"@ | Set-Content (Join-Path $libRoot 'tsconfig.json') -Encoding UTF8

  if (-not (Test-Path (Join-Path $src 'index.ts'))) {
    "/** Public API for $($lib.name) */`nexport {};" | Set-Content (Join-Path $src 'index.ts') -Encoding UTF8
  }
}

Write-Host "Scaffolded $($libs.Count) libraries under $root"
