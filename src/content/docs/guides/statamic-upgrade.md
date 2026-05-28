---
title: Statamic Upgrade
slug: guides/statamic-upgrade
sidebar:
  order: 1
---

# Upgrading Statamic from v2 to v3

This guide walks through upgrading a Statamic v2 site to v3. Before you start, read these two docs:

- [Updating v2 to the Latest Version](https://v2.statamic.com/updating)
- [Official v2 to v3 Upgrade Guide](https://statamic.dev/upgrade-guide/v2-to-v3)

## Step 1: Update Your v2 Site to the Latest Version

Download the latest v2 release from the Statamic website. You'll find it under the account where your license was purchased.

1. Run `php please version` to check your current v2 version.
2. Download and extract the latest v2 release.
3. Replace the existing `statamic` folder in your v2 project with the new one.
4. Run `php please update:housekeeping` to finish the update.

## Step 2: Migrate to v3

Create a new Statamic v3 site:

```bash
statamic new name-of-website
```

Install the [migrator package](https://github.com/statamic/migrator):

```bash
composer require statamic/migrator --dev --with-all-dependencies
```

Clear the new site's default content. Check the `content`, `blueprints`, and `trees` folders for any references to existing collections and remove them before continuing.

```bash
php please site:clear
```

Copy the `assets`, `site`, and any other local folders from your v2 installation into the new v3 site.

Commit everything to git before running the migration. This makes it easy to see exactly what changes.

Run the migration:

```bash
php please migrate:site
```

## Step 3: Review the Migrated Site

After the migration runs, check the following:

1. **Assets** - Confirm that assets load correctly in the layout file.
2. **Deprecated tags** - Look for old tags like `entries`, `relate`, and `pages` and update them.
3. **Routes** - Check `web.php` and remove any routes that are no longer needed.
4. **URL modifiers** - Find any templates using `field_name | url` and replace them with `field_name:url`.
