#!/usr/bin/env bash
# ASCII art courtesy of patorjk.com/software/taag (font: Big)

# Generate Next Semantic Version
# ------------------------------
# return next semantic version based on
# - the current version (ex: 1.2.3)
# - the single commit to compare it with (ex: 'feat!: a breaking change').
#
# Usage: new-version=$(./tools/scripts/new-version.sh "1.2.3" 'feat!: a breaking change')

#                    __ _
#                   / _(_)
#    ___ ___  _ __ | |_ _  __ _
#   / __/ _ \| '_ \|  _| |/ _` |
#  | (_| (_) | | | | | | | (_| |
#   \___\___/|_| |_|_| |_|\__, |
#                          __/ |
#                         |___/

SCRIPT_LOCATION="$(dirname "$0")"

#    __                  _   _
#   / _|                | | (_)
#  | |_ _   _ _ __   ___| |_ _  ___  _ __  ___
#  |  _| | | | '_ \ / __| __| |/ _ \| '_ \/ __|
#  | | | |_| | | | | (__| |_| | (_) | | | \__ \
#  |_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|___/

# exit the program with a new version if provided
function exit_with_version() {
  local new_version=$1
  if [[ -n $new_version ]]; then
    echo "New version: '$new_version'" >&2
    echo $new_version
  fi
  echo "Done!" >&2
  exit 0
}

function display_header() {
  cat $SCRIPT_LOCATION/headers/new-version.txt >&2
}

display_header

#            _
#           | |
#   ___  ___| |_ _   _ _ __
#  / __|/ _ \ __| | | | '_ \
#  \__ \  __/ |_| |_| | |_) |
#  |___/\___|\__|\__,_| .__/
#                     | |
#                     |_|

# get arguments
tag=$1
commit_name=$2

# validate arguments
if [[ -z $tag ]]; then
  echo "Error: Missing required argument 'tag'" >&2
  echo "Usage: $0 <tag> <commit_name>" >&2
  exit 1
fi

if [[ -z $commit_name ]]; then
  echo "Error: Missing required argument 'commit_name'" >&2
  echo "Usage: $0 <tag> <commit_name>" >&2
  exit 1
fi

echo "Figuring out the next version..." >&2
echo "Provided tag: '$tag'" >&2
echo "Provided commit name: '$commit_name'" >&2

valid_commit_types="build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test"

# exit with error if commit can't be processed
if [[ ! $commit_name =~ ^($valid_commit_types)(!)?(\(.+\))?:\ .+ ]]; then
  echo "the commit message '$commit_name' does not follow the expected conventional commits convention." >&2
  exit 1
fi

commit_type=$(echo $commit_name | grep -oE "^($valid_commit_types)" | head -1)

# exit without version if type should not trigger a release
if [[ $commit_type == "ci" || $commit_type == "docs" || $commit_type == "test" ]]; then
  echo "Commit type '$commit_type' does not trigger a new version." >&2
  exit_with_version
fi

# exit with major bumped version
if [[ $commit_name =~ ! ]]; then
  echo "Commit type '$commit_type' with '!' triggers a major bump." >&2
  new_version=$(echo $tag | awk -F. -v OFS=. '{$1+=1; $2=0; $3=0; print}')
  exit_with_version $new_version
fi

# exit with minor bumped version
if [[ $commit_type == "feat" || $commit_type == "style" || $commit_type == "perf" ]]; then
  echo "Commit type '$commit_type' triggers a minor bump." >&2
  new_version=$(echo $tag | awk -F. -v OFS=. '{$2+=1; $3=0; print}')
  exit_with_version $new_version
fi

# exit with patch bumped version
echo "Commit type '$commit_type' triggers a patch bump." >&2
new_version=$(echo $tag | awk -F. -v OFS=. '{$3+=1; print}')
exit_with_version $new_version
