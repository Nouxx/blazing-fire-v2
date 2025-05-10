# Database

## Dump local data to `seed`

```bash
supabase db dump --local --data-only > supabase/seed.sql
```

## Modify the DB structure

Example: by creating a table.

- Do the changes on Supabase Studio UI

- Generate the migration file by running:

```bash
supabase db diff --use-migra -f migration_file_name
```

- Reset the db to make sure everything's okay!