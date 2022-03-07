echo "hello world!"

DIR=$0
echo $DIR
if [ -d "$DIR" ]; then
  # Take action if $DIR exists. #
  echo "folder exists"
  cd $DIR
  env GIT_SSL_NO_VERIFY=true git pull https://oauth2:U6mC_y7cp41qGzqY71_u@10.230.189.31/RamadanM1/test_jenkins.git
else
    echo "no folder exists"
    env GIT_SSL_NO_VERIFY=true git clone https://oauth2:U6mC_y7cp41qGzqY71_u@10.230.189.31/RamadanM1/test_jenkins.git
fi
pwd
