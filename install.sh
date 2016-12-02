inquire(){
  run=true
  while [ $run = true ]; do
    echo -n "$1 [y/n] "
    read answer
    answer=$(echo $answer | tr '[:upper:'] '[:lower:]')

    case $answer in
      "y" | "yes")
        return 1;;
      "n" | "no")
        return 0;;
      *);;
    esac
  done
}

sudo yum -y update                                # Update the machine
sudo yum -y install gcc                           # Install GCC

sudo yum -y install epel-release                  # Install EPEL
sudo yum -y install nodejs npm --enablerepo=epel  # Install nodejs and npm

# Ask the user if they are going to do an advanced install with NGINX
# If yes, redirect port 80 -> 9000
# If no, redirect port 80 -> 9001
echo "Advanced install with NGINX? If you"
echo "don't know what to pick, choose no"
inquire "Yes or No"
nginx=$?

if [[ $nginx == 1 ]]; then
  # Redirect port 80 to 9000
  sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 9000
else
  # Redirect port 80 to 9001
  sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 9001
fi

sudo npm install nodemon -g  # Install nodemon globally
npm install                  # Install the project

echo "Installation complete! You may now use"
echo "one of the two commands to run your application:"
echo "nohup node server.js &"
echo "nodemon server.js"

# Choose one of the two
# nohup node server.js &       # PRODUCTION: Start the server (nohup)
# nodemon server.js            # DEVELOPMENT: The server will automatically restart when changes are made

#########
# NGINX #
#########

# sudo yum -y install nginx            # Install NGINX
# sudo chmod 777 /etc/nginx/nginx.conf # Give user permission to access nginx.conf
# sudo nano /etc/nginx/nginx.conf      # Modify nginx.conf (example below)
# sudo nginx                           # Start up NGINX

####################
# NGINX Management #
####################
# sudo nginx -s reload                                       # Do this command whenever you edit /etc/nginx/nginx.conf
# sudo systemctl restart nginx                               # This restarts nginx
# sudo top -c -p $(pgrep nginx | tr '\n' ',' | sed 's/.$//') # Force stop nginx
