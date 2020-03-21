$LAST_COMMIT_MESSAGE="$(git log -1 --pretty=%B)"

cd build
git add .
git commit -m "${LAST_COMMIT_MESSAGE}"
git push
