# start ganache
echo "Starting ganache on port 7545"
npm install -g ganache-cli
nohup ganache-cli --port 7545 -a 5 &>/dev/null &
#--account="<0xaaaaaaaa1>, 100" [--account="<0xaaaaaaaa2>, 100"] --secure --unlock "0xaaaaaaaa1" --unlock "0xaaaaaaaa2"

# start mongo db
echo "Starting MongoDB on port 27017"
nohup mongod &>/dev/null &

# start front end project
cd ui
echo "Starting npm on http://localhost:4200/ "
nohup npm start &>/dev/null &

# start java project
cd ../api
mvn clean install
echo "Starting spring api on http://localhost:8080/"
nohup java -jar target/api-1.0-SNAPSHOT.jar &>/dev/null &