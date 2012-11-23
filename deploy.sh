#!/bin/bash

version=`date "+%Y-%m-%d_%H%M"`;

################################
# cache.manifest
################################
cat > cache.manifest <<EOF
CACHE MANIFEST
# version $version

EOF

find . -name "*.js" -or -name "*.css" | sed "s/^\\./\/game/g" >> cache.manifest

echo "### cache.manifest ###"
cat cache.manifest
echo "######################"

################################
# backup files
################################
deploy_file="deploy_$version.tar.gz"
tar cvzf $deploy_file --exclude="*/.*" index.html cache.manifest scripts/ styles/

################################
# upload
################################
echo "Upload files to server..."
scp $deploy_file jinius@ivorytower.co.kr:www/game/deploy.tar.gz

