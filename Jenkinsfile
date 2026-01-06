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

        stage('Deploy Lambda (DOCKER CLI MAGIC)') {
            steps {
                sh '''
                docker run --rm \
                  -v "$PWD:/work" \
                  -w /work \
                  amazon/aws-cli:2.15.0 \
                  lambda update-function-code \
                  --function-name ${FUNCTION_NAME} \
                  --region ${AWS_REGION} \
                  --zip-file fileb://lambda.zip
                '''
            }
        }
    }
}
