#!/bin/bash
# ASCII art courtesy of patorjk.com/software/taag (font: Big)

# Setup Env File
# ------------------------------
# generate ".env.local" file with all required values (sensitive or not)
# - create a backup file (".env.backup")
# - leverage supabase CLI to get values from local instance
#
# Usage: ./tools/scripts/setup-env.sh

#                    __ _
#                   / _(_)
#    ___ ___  _ __ | |_ _  __ _
#   / __/ _ \| '_ \|  _| |/ _` |
#  | (_| (_) | | | | | | | (_| |
#   \___\___/|_| |_|_| |_|\__, |
#                          __/ |
#                         |___/

SCRIPT_LOCATION="$(dirname "$0")"
OUTPUT_FILE_NAME=".env.local"
OUTPUT_FILE_PATH="$SCRIPT_LOCATION/../../$OUTPUT_FILE_NAME"
BACKUP_FILE_PATH="$SCRIPT_LOCATION/../../.env.backup"

#    __                  _   _
#   / _|                | | (_)
#  | |_ _   _ _ __   ___| |_ _  ___  _ __  ___
#  |  _| | | | '_ \ / __| __| |/ _ \| '_ \/ __|
#  | | | |_| | | | | (__| |_| | (_) | | | \__ \
#  |_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|___/

function display_header() {
  cat $SCRIPT_LOCATION/headers/setup-env.txt >&2
}

#            _
#           | |
#   ___  ___| |_ _   _ _ __
#  / __|/ _ \ __| | | | '_ \
#  \__ \  __/ |_| |_| | |_) |
#  |___/\___|\__|\__,_| .__/
#                     | |
#                     |_|

display_header

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

#                         _
#                        | |
#   ___ _   _ _ __   __ _| |__   __ _ ___  ___
#  / __| | | | '_ \ / _` | '_ \ / _` / __|/ _ \
#  \__ \ |_| | |_) | (_| | |_) | (_| \__ \  __/
#  |___/\__,_| .__/ \__,_|_.__/ \__,_|___/\___|
#            | |
#            |_|

echo "Setting up environment variables for Supabase..."

supabase status -o env \
  --override-name api.url=NEXT_PUBLIC_SUPABASE_URL \
  --override-name auth.anon_key=NEXT_PUBLIC_SUPABASE_ANON_KEY \
  > $OUTPUT_FILE_PATH

echo "Supabase ok."

echo "Successfully generated $OUTPUT_FILE_NAME!"
