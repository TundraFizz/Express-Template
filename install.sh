#############
# LOOK HERE #
###################################################
# https://nodejs.org/en/download/package-manager/ #
###################################################

sudo yum -y update                                # Update the machine
sudo yum -y install gcc                           # Install GCC

sudo yum -y install nodejs npm --enablerepo=epel  # Install nodejs and npm
# OLD (requires you to logout and back in which is ANNOYING!)
# curl https://raw.githubusercontent.com/creationix/nvm/v0.13.1/install.sh | bash

sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 9000 # Redirect port 80 to 9000
sudo iptables-save                                                              # Save the IP tables
# ^ This doesn't actually save it for when the machine restarts...
#   ...so I must find a different solution!

npm install                                                   # Install the project
node server.js                                                # Startup the server (nohup)

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
