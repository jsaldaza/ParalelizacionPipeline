pipeline {
    agent any

    tools {nodejs "Node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/jsaldaza/ParalelizacionPipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key ff6fbd77-15fc-4541-98dc-a45c8dc903ad  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/jsaldaza/ParalelizacionPipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key ff6fbd77-15fc-4541-98dc-a45c8dc903ad  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent2_3"
                    }
                    steps {
                        git url: 'https://github.com/jsaldaza/ParalelizacionPipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key ff6fbd77-15fc-4541-98dc-a45c8dc903ad  --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agent2_4"
                    }
                    steps {
                        git url: 'https://github.com/jsaldaza/ParalelizacionPipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key ff6fbd77-15fc-4541-98dc-a45c8dc903ad  --parallel'
                    
                    }
                }

               

                
   
                  
            }

             
        }

    }
            
}