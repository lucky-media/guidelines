# Upgrading Statamic from v2 to v3

In this guide we will document our steps at migrating a Statamic website from v2 to v3.

Before starting make sure you read the following guides:

- [Updating v2 to latest version](https://v2.statamic.com/updating)
- [The official upgrade guide to v3](https://statamic.dev/upgrade-guide/v2-to-v3)

## Updating to the latest v2 version

The easiest way to do this is by grabbing the latest v2 version from the Statamic website. Please note that the v2 version is available for download from the account that you purchased the license.

1. Run `php please version` to grab the current v2 version.
2. After you have a local copy of Statamic, extract the contents.
3. Grab the `statamic` folder and paste it in the v2 website (Replace the current folder).
4. Run `php please update:housekeeping` to finish the update.

## Migrating to v3

Create a fresh statamic website:

```bash
statamic new name-of-website
```

Install the [migrator](https://github.com/statamic/migrator)

```bash
composer require statamic/migrator --dev --with-all-dependencies
```

Now clear the new site, also manually check the `content`, `blueprints`, `trees` folder for any reference of existing collections. They all need to be deleted before migrating.

```bash
php please site:clear
```

From the v2 installation copy the `asssets`, `site` and any other local folders.

Now you should commit everything to `git`, it will make tracking changes easier when migrating.

Now to migrate run:

```bash
php please migrate:site
```

Important things to check:
1. On the layout file make sure the assets are loading with the correct path.
2. Check for depreciated tags for ex: `entries`, `relate`, `pages` etc.
3. Check routes on `web.php` and remove unnecessary ones.
4. Check templates for usage of `field_name | url` it should be either removed or replaced with `field_name:url`.
