pipeline {
    agent any

    environment {
        AWS_REGION    = "us-west-2"
        FUNCTION_NAME = "createUser"
        REPO_URL      = "https://github.com/Abadulhassan/lambda-omni.git"
    }

    stages {

        stage('Checkout Repository') {
            steps {
                checkout([
                  $class: 'GitSCM',
                  branches: [[name: '*/main']],
                  userRemoteConfigs: [[url: REPO_URL]]
                ])
            }
        }

        stage('Deploy Lambda') {
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

