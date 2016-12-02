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
echo "Install NGINX and set up reverse proxy?"
echo "If you don't know what to pick, choose no"
inquire "Yes or No"
nginx=$?

if [[ $nginx == 1 ]]; then
  # Redirect port 80 to 9000
  sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 9000
else
  # Redirect port 80 to 9001
  sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 9001

  # Delete the NGINX configuration file since it's not needed
  rm nginx.conf
fi

sudo npm install nodemon -g  # Install nodemon globally
npm install                  # Install the project

echo "Delete Git-related files?"
echo "If you don't know what to pick, choose yes"
inquire "Yes or No"
git=$?

if [[ $git == 1 ]]; then
  # Redirect port 80 to 9000
  rm -rf .git
  rm README.md
fi

echo "Installation complete!"
echo "Start your application by executing this command:"
echo ". start"

# Delete this file
rm -- "$0"
