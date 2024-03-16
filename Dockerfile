# author:
# Sai Vivek Vangaveti - G01413358
# Venkata Sree Divya Kasturi - G01411963
# Mary Ashwitha Gopu - G01408743
# Gangadhara Sai Kutukuppala - G01444780
# functionality: Dockerfile for the survey form html

functionality: Styles for the survey form html */
FROM tomcat
COPY ./surveyform.war /usr/local/tomcat/webapps/
CMD ["catalina.sh", "run"]