import React, { useState } from 'react';
import './App.css';

function App() {

  // useState: l'état initial
  const [tasks, setTasks] = useState([]); // la liste de taches est initiallement vide
  const [userInput, setUserInput] = useState(''); //la saisie initiale de l'utilisateur est vide

  // fonction pour ajouter de nouvelles tâches
  // trim() afin de supprimer les espaces + if pour vérifier s'il n'est pas vide
  const AddTask = () => {
    if (userInput.trim()) {
      setTasks([...tasks, { text: userInput, completed: false }]);
      // après la tâche est ajouté, le champ pour la saisie est vidé
      setUserInput('');
    }
  };

  // fonction pour completer des tâches
  const CompleteTask = (index) => {
    // création de nouvelle list qui contient les tâches accomplies
    const newTasks = [...tasks];
    // chercher la tâche avec l'index donné et inverser leur valeur
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
    // conteneur d'application
    <div className="App">
      <h1>To-Do List</h1>

      {/* saisir une nouvelle tâche*/}
      <div className="Input">
        <input
          type="text" 
          value={userInput} // props
          onChange={(e) => setUserInput(e.target.value)} // mettre à jour l'état de l'entrée utilisateur
          placeholder="une tâche (ex : acheter du pain)" // indice pour l'utilisateur
        />
        <button onClick={AddTask}>Ajouter</button> {/* bouton pour ajouter la nouvelle tâche à la liste */}
      </div>

      {/* la liste des tâches*/}
      <section>
        {tasks.map((task, index) => (
          // mapping le tableau des tâches' ; chaque tâche est enveloppée dans une div avec une clé unique
          <div key={index} className="task-item">
            {/* affiche le texte de la tâche ; applique la classe 'completed' si la tâche est terminée */}
            <span className={`task-text ${task.completed ? 'completed' : ''}`}>
              {task.text}
            </span>
            <div className="task-buttons">
              <button onClick={() => CompleteTask(index)}>
                {task.completed ? 'Invalidate' : 'Valide'} {/* le texte change en fonction de l'état de la tâche */}
              </button>
              <button onClick={() => RemoveTask(index)}>Supprimer</button> {/* bouton pour supprimer la tâche */}
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}

export default App;
