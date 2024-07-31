import React, { useState } from 'react';
import './components/AddTask'
import './components/TaskItem'
import './components/TaskList'

function App() {

  // useState: l'état initial
  const [tasks, setTasks] = useState([]); // la liste de taches est initiallement vide
  const [userInput, setUserInput] = useState(''); //la saisie initiale de l'utilisateur est vide

  // fonction pour ajouter de nouvelles tâches
  // trim() afin de supprimer les espaces + if pour vérifier s'il n'est pas vide
  const AddTask = () => {
    if (userInput.trim()) {
      setTasks([...tasks, { text: userInput, completed: false }]);
      // Après la tâche est ajouté, le champ pour la saisie est vidé
      setUserInput('');
    }
  };

  // fonction pour completer des tâches
  const CompleteTask = (index) => {
    // Création de nouvelle list qui contient les tâches accomplies
    const newTasks = [...tasks];
    // Chercher la tâche avec l'index donné et inverser leur valeur
    newTasks[index].completed = !newTasks[index].completed;
    // déplacer une tâche terminée vers la fin de la liste
    newTasks.sort((a, b) => a.completed - b.completed);
    // Mettre a jour l'état
    setTasks(newTasks);
  };

  const RemoveTask = (index) => {
    // demander l'utilisateur de confirmer le choix 
    const isConfirmed = window.confirm('Vous etes sûr de vouloir supprimer cette tâche?');
    // si confirmé, suppression d'une tâche
    if (isConfirmed) {
      setTasks(tasks.filter((task, i) => i !== index));
    }
  };


  return (
    <div>
    </div>
  );
}

export default App;
