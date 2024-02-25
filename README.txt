

create war file for your application using command
jar -cvf filename.war .

create ec2 instnace t2 medium, ubuntu 20, storage: 28gb, along with key 

change permissions of the key file to 700 
chmod 700 filename.pem

copy the war file to ec2 instance using scp using command
scp -i ~/Downloads/assignment2.pem ./surveyform.war ubuntu@ec2-18-191-55-199.us-east-2.compute.amazonaws.com:~

update the system using command

sudo apt-get update -y

install docker using command

sudo apt install docker.io -y

create docker file using the below content

FROM tomcat
COPY ./surveyform.war /usr/local/tomcat/webapps/
CMD ["catalina.sh", "run"]

save the file with the name Dockerfile(mandatory)

build the docker image using the command

sudo docker build -t imagename .

create the container using the command
sudo docker run -d -it -p 8080:8080 imagename

verify the app is working by accessing the public ip4 dns
http://host:8080/app

login into your docker hub using your credentials

tag your docker image you want to push to the docker hub by command

sudo docker tag image_you_want_to_tag username/imagename

docker push username/imagename

verify in your docker hub

install rancher container in ec2 instance by using the command provided by the rancher website looks like this

sudo docker run --privileged -d --restart=unless-stopped -p 80:80 -p 443:443 rancher/rancher

open the url(public ip4 dns of your ec2 instance) you will face connection is private

go to advanced and click on url you will redirected to rancher page

copy the command and paste in ec2 terminal

copy the password and paste in rancher page

click next and create new password 

