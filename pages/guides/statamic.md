# Upgrading Statamic from v2 to v3

Embark on a seamless transition from Statamic v2 to v3 by following our step-by-step guide. But first, ensure you've acquainted yourself with:

- [Updating v2 to the Latest Version](https://v2.statamic.com/updating)
- [The Official Upgrade Guide to v3](https://statamic.dev/upgrade-guide/v2-to-v3)

## Refreshing Your v2 with the Latest Version

Snag the latest v2 version from the Statamic website. Keep in mind that v2 can be accessed through the account where your license was purchased.

1. Execute `php please version` to fetch your current v2 version.
2. Extract the contents once you've acquired the local copy of Statamic.
3. Replace the existing `statamic` folder in the v2 website with the new one.
4. Complete the update with `php please update:housekeeping`.

## Painless Migration to v3

Whip up a fresh Statamic website:

```bash
statamic new name-of-website
```

Install the [migrator](https://github.com/statamic/migrator):

```bash
composer require statamic/migrator --dev --with-all-dependencies
```

Clear the new site and double-check the `content`, `blueprints`, and `trees` folders for references to existing collections. Remove them all before proceeding.

```bash
php please site:clear
```

From the v2 installation, copy over the `assets`, `site`, and any other local folders.

Commit everything to `git` for efficient change tracking during migration.

Now, initiate the migration:

```bash
php please migrate:site
```

Ensure a smooth experience by checking the following:
1. Verify that assets load correctly in the layout file.
2. Look out for deprecated tags like `entries`, `relate`, `pages`, etc.
3. Inspect routes in `web.php`, eliminating unnecessary ones.
4. Keep an eye on templates using `field_name | url`. Replace or eliminate them with `field_name:url`.