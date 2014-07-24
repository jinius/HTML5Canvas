#!/bin/bash

appcache="cache.appcache";
version=`date "+%Y-%m-%d_%H%M"`;
server="jinius@ivorytower.co.kr";

################################
# cache manifest
################################
cat > $appcache <<EOF
CACHE MANIFEST
# version $version

CACHE:
EOF

find . -name "*.js" -or -name "*.css" | sed "s/^\\./\\./g" >> $appcache

echo "### cache manifest ###"
cat $appcache
echo "######################"

################################
# backup files
################################
deploy_file="deploy_$version.tar.gz"
tar cvzf $deploy_file --exclude="*/.*" index.html $appcache scripts/ styles/

################################
# upload
################################
echo "Upload files to server..."
scp $deploy_file $server:www/game/deploy.tar.gz

