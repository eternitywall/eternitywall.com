jekyll build
rsync -vr --exclude node_modules/ _site/ riccardo.casatta.it:/var/www/eternitywall.com/html/
