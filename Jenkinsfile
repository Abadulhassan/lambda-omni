pipeline {
    agent any

    environment {
        AWS_REGION   = "us-west-2"
        FUNCTION_NAME = "createUser"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Abadulhassan/lambda-omni.git'
            }
        }

        stage('Install Node Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Package Lambda') {
            steps {
                sh '''
                zip -r lambda.zip . \
                  -x ".git/*" \
                  -x "node_modules/aws-sdk/*" \
                  -x "Jenkinsfile"
                '''
            }
        }

        stage('Deploy to AWS Lambda') {
            steps {
                sh '''
                aws lambda update-function-code \
                  --function-name $FUNCTION_NAME \
                  --zip-file fileb://lambda.zip \
                  --region $AWS_REGION
                '''
            }
        }
    }
}
