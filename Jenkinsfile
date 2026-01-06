pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/Abadulhassan/lambda-omni.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                echo "🛠️ Run your build steps here"
                // Example for Node.js:
                // sh 'npm install'
                // sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo "🚀 Add your deployment steps here"
                // Example for SSH deploy to EC2:
                // sh 'scp -i your-key.pem ./build.zip ec2-user@your-ec2-ip:/path/to/deploy/'
            }
        }
    }
}

