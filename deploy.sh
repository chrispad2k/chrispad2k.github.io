cd build
git add .
git commit -m "$(git log -1 --pretty=%B)"
git push
