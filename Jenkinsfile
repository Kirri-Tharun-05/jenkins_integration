pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Kirri-Tharun-05/jenkins_integration.git'
            }
        }
        stage('Build & Test') {
            steps {
                echo 'BUILD AND TEST'
                // You can replace the above with your actual build commands when ready
            }
        }
    }
    post {
        always {
            emailext (
                subject: "Build ${currentBuild.fullDisplayName}",
                body: "Build finished.",
                to: 'receiver@example.com',
                attachLog: true
            )
        }
    }
}
