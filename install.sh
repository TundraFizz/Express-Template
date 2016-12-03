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

clear
sudo yum -y update                                # Update the machine
sudo yum -y install gcc                           # Install GCC

sudo yum -y install epel-release                  # Install EPEL
sudo yum -y install nodejs npm --enablerepo=epel  # Install nodejs and npm

sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 9001

sudo npm install nodemon -g  # Install nodemon globally
npm install                  # Install the project

clear
echo "Delete Git-related files?"
echo "If you don't know what to pick, choose yes"
inquire "Yes or No"
git=$?

if [[ $git == 1 ]]; then
  rm -rf .git
  rm .gitignore
  rm README.md
  rm nginx.conf
fi

clear
echo "Installation complete!"
echo ""
echo "Start your application by executing this command:"
echo ". server"
echo ""

# Delete this file
rm -- "$0"

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
