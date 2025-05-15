#!/bin/bash

# finds all .d2 files and render them as .svg

D2_DIRECTORY="./assets/diagrams"
GENERATED_ASSETS_DIRECTORY="./assets/img/generated"

D2_SKETCH_FLAG="--sketch"
D2_THEME_FLAG="--theme 101"
D2_FLAGS="$D2_SKETCH_FLAG $D2_THEME_FLAG"

echo "Rendering all .d2 diagrams..."

for D2_FILE in "$D2_DIRECTORY"/*; do
  if [ -f "$D2_FILE" ] && [[ "$D2_FILE" == *.d2 ]]; then
    # it's a .d2 file
    echo "Rendering $D2_FILE..."
    FILE_BASE_NAME=$(basename "$D2_FILE" .d2)
    SVG_FILE_PATH="$GENERATED_ASSETS_DIRECTORY/$FILE_BASE_NAME.svg"
    d2 $D2_FILE $SVG_FILE_PATH $D2_FLAGS
  else
    # it's not
    echo "Skipping: $D2_FILE (not a .d2 file)"
  fi
done
