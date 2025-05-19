#!/bin/bash
# ascii art: https://patorjk.com/software/taag font: Big

#    _____ ____  _   _ ______ _____ _____
#   / ____/ __ \| \ | |  ____|_   _/ ____|
#  | |   | |  | |  \| | |__    | || |  __
#  | |   | |  | | . ` |  __|   | || | |_ |
#  | |___| |__| | |\  | |     _| || |__| |
#   \_____\____/|_| \_|_|    |_____\_____|

SCRIPT_LOCATION="$(dirname "$0")"
OUTPUT_FILE_NAME=".env.local"
OUTPUT_FILE_PATH="$SCRIPT_LOCATION/../../$OUTPUT_FILE_NAME"
BACKUP_FILE_PATH="$SCRIPT_LOCATION/../../.env.backup"

#    _____ ______ _______ _    _ _____
#   / ____|  ____|__   __| |  | |  __ \
#  | (___ | |__     | |  | |  | | |__) |
#   \___ \|  __|    | |  | |  | |  ___/
#   ____) | |____   | |  | |__| | |
#  |_____/|______|  |_|   \____/|_|

echo -n "Checking supabase CLI... "
if ! supabase --version &> /dev/null; then
  echo "Supabase CLI not found. Please install it from https://supabase.com/docs/guides/cli"
  exit 1
fi
echo "ok."

echo -n "Creating backup file... "
if [ -f "$OUTPUT_FILE_PATH" ]; then
  cp "$OUTPUT_FILE_PATH" "$BACKUP_FILE_PATH"
  echo "ok."
else
  echo "skipped."
fi

echo -n "Creating output file... "
if [ ! -f "$OUTPUT_FILE_PATH" ]; then
  touch $OUTPUT_FILE_PATH
  echo "ok."
else
  echo "skipped."
fi

#    _____ _    _ _____        ____           _____ ______
#   / ____| |  | |  __ \ /\   |  _ \   /\    / ____|  ____|
#  | (___ | |  | | |__) /  \  | |_) | /  \  | (___ | |__
#   \___ \| |  | |  ___/ /\ \ |  _ < / /\ \  \___ \|  __|
#   ____) | |__| | |  / ____ \| |_) / ____ \ ____) | |____
#  |_____/ \____/|_| /_/    \_\____/_/    \_\_____/|______|

echo "Setting up environment variables for Supabase..."

supabase status -o env \
  --override-name api.url=NEXT_PUBLIC_SUPABASE_URL \
  --override-name auth.anon_key=NEXT_PUBLIC_SUPABASE_ANON_KEY \
  > $OUTPUT_FILE_PATH

echo "Supabase ok."

echo "Successfully generated $OUTPUT_FILE_NAME!"
