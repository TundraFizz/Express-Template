#############
# LOOK HERE #
###################################################
# https://nodejs.org/en/download/package-manager/ #
###################################################

sudo yum -y update
sudo yum -y install gcc
curl https://raw.githubusercontent.com/creationix/nvm/v0.13.1/install.sh | bash
# Logout and then log back in

sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080 # Redirect port 80 to 8080
sudo iptables-save                                                              # Save the IP tables

# git clone https://github.com/TundraFizz/NodeJS-Template.git # Clone from repository
# cd NodeJS-Template Go into the directory
npm install
node server.js

# OLD
# npm install express --save # Install Express in the myapp directory and save it in the dependencies list
# node server.js             # Start up the server

#########
# NGINX #
#########

sudo yum -y install nginx            # Install NGINX
sudo chmod 777 /etc/nginx/nginx.conf # Give user permission to access nginx.conf
sudo nano /etc/nginx/nginx.conf      # Modify nginx.conf (example below)
sudo nginx                           # Start up NGINX

####################
# NGINX Management #
####################
# sudo nginx -s reload                                       # Do this command whenever you edit /etc/nginx/nginx.conf
# sudo systemctl restart nginx                               # This restarts nginx
# sudo top -c -p $(pgrep nginx | tr '\n' ',' | sed 's/.$//') # Force stop nginx
