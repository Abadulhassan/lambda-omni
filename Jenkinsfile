pipeline {
    agent any

    environment {
        AWS_REGION    = "us-west-2"
        FUNCTION_NAME = "createUser"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Abadulhassan/lambda-omni.git'
            }
        }

        stage('Deploy Lambda (MAGIC AWS DOCKER)') {
            steps {
                script {
                    docker.image('amazon/aws-cli:2.15.0').inside {
                        sh '''
                        aws lambda update-function-code \
                          --function-name $FUNCTION_NAME \
                          --region $AWS_REGION \
                          --zip-file fileb://lambda.zip
                        '''
                    }
                }
            }
        }
    }
}
