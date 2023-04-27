#!/bin/bash
# rm -rf "${CLIENT_BUILD_DIR}" 
# if [ ! -d "${CLIENT_BUILD_DIR}" ]
# then mkdir -p "${CLIENT_BUILD_DIR}"
# fi

# echo ${CLIENT_BUILD_DIR};
# echo "rahul";

# sudo ln -s "$(which node)" /usr/bin/node
# sudo ln -s "$(which npm)" /usr/bin/npm


# ln -s /usr/bin/nodejs /usr/bin/node

vip dev-env create  --elasticsearch=false --mailhog=false --media-redirect-domain=wp-develop.salesforce.com --mu-plugins=image --multisite=true --php=8.0 --phpmyadmin=false --slug=${PROJECT_NAME} --title=${PROJECT_NAME} --wordpress=6.1.1 --xdebug=false --app-code=${CLIENT_BUILD_DIR}
vip dev-env start --slug ${PROJECT_NAME} 
# # vip dev-env import sql $CURRENT_DIR/config/db.sql --slug=${PROJECT_NAME} --search-replace="rahul3.vipdev.lndo.site,${PROJECT_NAME}.vipdev.lndo.site"