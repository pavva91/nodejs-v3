#!/bin/bash

echo "Pre-commit Git Hook: Format (prettier) staged vue files"

STAGED_FILES=$(git diff --cached --name-only -- '*.js' '*.cjs' '*.md' '*.json')

if $STAGED_FILES '==' ""; then
	echo "No files to update"
else
    echo "Updated Files: "
    echo "$STAGED_FILES"
	for file in $STAGED_FILES; do
		echo "Run prettier for file: $file"
		npx prettier "$file" --write
		git add "$file"
	done

	for file in $STAGED_FILES; do
		if [[ $file != *".json"* ]]; then
			if [[ $file == *".js"* || $file == *".cjs"* ]]; then
				echo "Run linter (eslint) for file: $file"
                npx eslint "$file"
			fi
		fi
	done
fi
