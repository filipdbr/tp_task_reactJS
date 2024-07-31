import React, { useState } from 'react';

function App() {

  // useState: l'état initial
  const [tasks, setTasks] = useState([]); // la liste de taches est initiallement vide
  const [userInput, setUserInput] = useState(''); //la saisie initiale de l'utilisateur est vide

  // fonction pour ajouter de nouvelles tâches
  // trim() afin de supprimer les espaces + if pour vérifier s'il n'est pas vide
  const AddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      // Après la tâche est ajouté, l'espace pour la saisie est nettoyé 
      setInputValue('');
    }
  };

  return (
    <div>

    </div>
  );
}

export default App;
