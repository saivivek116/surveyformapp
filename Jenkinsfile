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
					sh "echo ${DOCKERHUB_PASS} | docker login -u saivivek116 --password-stdin"
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
				
					String kubeconfigPath = '/var/lib/jenkins/.kube/config'
            
					// Path to the manifest file
					String manifestPath = '/home/ubuntu/manifest.yaml'
            
					// Apply the manifest file to your Kubernetes cluster
					sh "kubectl --kubeconfig=${kubeconfigPath} apply -f ${manifestPath}"
            
					// Assuming your deployment's name is 'deployment', replace 'deployment' with your actual deployment name if different
					sh "kubectl --kubeconfig=${kubeconfigPath} rollout status deployment/deployment"
				}
			}
		}
	}
}