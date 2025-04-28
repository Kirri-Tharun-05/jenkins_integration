pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Kirri-Tharun-05/jenkins_integration.git'
            }
        }
        stage('Build & Test') {
           
        }
        stage('Publish Report') {
            steps {
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'test-output/ExtentReports', 
                    reportFiles: 'index.html', 
                    reportName: 'Extent Report'
                ])
            }
        }
    }
    post {
        always {
            emailext (
                subject: "Build ${currentBuild.fullDisplayName}",
                body: "Please find the attached report.",
                to: 'receiver@example.com',
                attachLog: true
            )
        }
    }
}
