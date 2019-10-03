cd backend
./gradlew clean bootJar
cd ..
#docker build . -t dockerdemo:latest
#docker tag dockerdemo:latest markusjuopperi/dockerdemo:latest
docker-compose build
docker-compose push
docker stack rm mystack --namespace my-app
docker stack deploy --namespace my-app --compose-file docker-compose.yml mystack