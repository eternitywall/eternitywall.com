#spectacle -t api/pn2a/ -l img/logos/eternity_logo_final.svg api/pn2a/spec.yaml
#spectacle -t api/authcal/ -l img/logos/eternity_logo_final.svg api/authcal/spec.yaml
jekyll build
rsync -vr --exclude node_modules/ _site/ riccardo.casatta.it:/var/www/eternitywall.com/html/
