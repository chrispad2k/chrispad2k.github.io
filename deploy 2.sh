$last_commit=$(git log -1 --pretty=%B)

cd build
git add .
git commit -m "$(last_commit)"
git push
