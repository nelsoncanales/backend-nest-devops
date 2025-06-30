pipeline{
    agent any

    //escenarios
    stages{
        stage ("Saludo ..."){
            steps{
                sh 'echo "hola atodos desde el pipeline"'
                sh 'npm ci'
                sh 'echo "saliendo ...."'
            }
        }
    }
    
}