pipeline {
    agent any

    tools {
        nodejs "node"
    }

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/jsaldaza/ParalelizacionPipeline.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run cypress run --record --key ff6fbd77-15fc-4541-98dc-a45c8dc903ad --parallel'
                    }
                }
            }
        }
    }
}
