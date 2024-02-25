pipeline{
	agent any
	environment {
		DOCKERHUB_PASS = "wfm4yjw1YUV8nvr!tmz"
	}
	stages{
		stage("Generating the Build for SWE645 student survey"){
			steps{
				script{
					checkout scm
					sh 'rm -rf *.war'
					sh 'jar -cvf surveyform.war -C src/ .'
					sh 'echo "wfm4yjw1YUV8nvr!tmz" | docker login -u saivivek116 --password-stdin'
					sh 'docker build -t saivivek116/swe645assignment2 .'
				}
			}
		}
		stage("Pushing image to docker"){
			steps{
				script{
					sh 'docker push saivivek116/swe645assignment2'
				}
			}
		}
		stage("Deploying to rancher"){
			steps{
				script{
				
					sh 'kubectl rollout restart deploy assignment2-swe645 -n assignment2namespace'
				}
			}
		}
	}
}