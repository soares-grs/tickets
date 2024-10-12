## Command to run the database locally with docker

docker run --name mysql-tickets -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=tickets_dev -p 3306:3306 -d mysql:latest
