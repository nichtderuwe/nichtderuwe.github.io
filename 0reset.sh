rm -rf .git .gitmodules themes/hugo-theme-learn/
#https://nichtderuwe.nichtderuwe.workers.dev
git init
git config user.email "157626686+nichtderuwe@users.noreply.github.com"
git config user.name "#NichtDerUwe https://nichtderuwe.github.io"


(cd themes;wget -c https://github.com/matcornic/hugo-theme-learn/archive/refs/heads/master.zip;unzip master.zip; mv hugo-theme-learn-master/ hugo-theme-learn;rm master.zip)
rm -rf  themes/hugo-theme-learn/exampleSite/
rm themes/hugo-theme-learn/images/screenshot.png 


git remote add origin git@github.uwe.lan:nichtderuwe/nichtderuwe.github.io.git 

git add -A ;git commit -m "NichtDerUwe";
git push --set-upstream origin master --force
