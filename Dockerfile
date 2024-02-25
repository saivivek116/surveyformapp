FROM tomcat
COPY ./surveyform.war /usr/local/tomcat/webapps/
CMD ["catalina.sh", "run"]