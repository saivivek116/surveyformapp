author: Sai Vivek Vangaveti
purpose: procedure to host a website in s3 and ec2
Course home page Website link S3 = http://assignment1-swe645.s3-website-us-east-1.amazonaws.com/

Student survey Website link EC2 = http://ec2-54-197-103-39.compute-1.amazonaws.com/

Steps to configure S3 Bucket fot static website hosting
    1. Log in to the AWS Management Console and search for S3 using the global search function.
    2. Create a new bucket by providing details such as name, region, and others.
    3. Enable static website hosting by navigating to the properties of the created bucket. Under "Static website hosting," click on "Edit" to enable the option and save the changes.
    4. Adjust public access settings by accessing the permissions tab of the bucket. Under "Block public access," choose "Edit" to clear the option blocking all public access, and then save the changes.
    5. Add a bucket policy to your created bucket by selecting the bucket and then navigating to permissions. Under "Bucket policy," choose "Edit" and provide the following policy:
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "PublicReadGetObject",
                "Effect": "Allow",
                "Principal": "*",
                "Action": [
                    "s3:GetObject"
                ],
                "Resource": [
                    "arn:aws:s3:::Bucket-Name/*"
                ]
            }
        ]
    }
    In the place of Bucket-Name provide your bucket name and save the changes
    6. Create the HTML and CSS files for your application if they are not already available.
    7. Specify the name of your index document and error document in the properties of the bucket under the "Static website hosting" section. Choose "Edit" and provide the names of the index document and error document.
    8. Upload all the files, including the index and error documents, to the bucket. You can do this by selecting "Upload" or simply drag and dropping the files into the AWS Management Console bucket listing.
    9. Access the URL of your application, which is provided under the "Static website hosting" section in the properties of your bucket, to test the application.


Steps to configure EC2 instance for hosting static website
    1. Log in to the AWS Management Console and search for EC2 using the global search function. Click on EC2 in the search results.
    2. Create a new instance by clicking on the button labeled "Launch Instance."
    3. Choose an AMI (Ubuntu) from the available AMIs and specify its architecture, instance type, and create a new key pair if one does not already exist.
    4. Configure security group settings under the network settings section. Enable SSH, HTTPS, and HTTP traffic to allow access to your website.
    5. Click on the "Launch Instance" button to initiate the instance creation process.
    6. Navigate to the EC2 home page and click on "Instances (Running)" under the Resources section. You will be redirected to a page listing all the instances.
    7. Select the newly created instance from the list and click on the "Actions" dropdown. Choose "Connect."
    8. You can connect to the instance either using "EC2 Instance Connect" or an "SSH client."
    9. Install the Apache2 web server using the below commands.
    "sudo -i"
    "sudo apt install apache2"
    10. create the survey form html and its styles
    11. Before transferring files, connect to your EC2 instance and adjust permissions for the /var/www/html directory using the following command:
    "sudo chmod -R 755 /var/www/html"
    Next, transfer files from your local system to the EC2 instance using the following command:
    "sudo scp -i Downloads/saivivek298awsdemo1.pem -r work/third-sem/swe645/assignment1/surveyform/* ubuntu@ec2-34-204-99-73.compute-1.amazonaws.com:/var/www/html"
    Ensure that the files are successfully transferred to the /var/www/html directory.
    12. execute the following commands:
    sudo systemctl restart apache2
    sudo systemctl status apache2 ( to check the status of web server)
    13. Once the web server is up and running, locate the URL of the website in the properties of the EC2 instance. You can use this URL to access the live website.
