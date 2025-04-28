pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/your-repo-name.git'
            }
        }
        stage('Build & Test') {
            steps {
                bat 'mvn clean test'  // if using Maven
            }
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
