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

        stage('Package Lambda (No npm)') {
            steps {
                sh '''
                zip -r lambda.zip index.js \
                  -x ".git/*" \
                  -x "Jenkinsfile"
                '''
            }
        }

        stage('Deploy to AWS Lambda') {
            steps {
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
