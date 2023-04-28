import styles from './Form.module.css';
import { InvalidEvent,ChangeEvent, FormEvent, useState } from 'react';

function Form() {

    const [tasks, setTasks] = useState([''])

    const [newTasksText, setNewTasksText] = useState('')

    function handleCreateTasks(event: FormEvent) {
        event.preventDefault();

        setTasks([...tasks, newTasksText])
        setNewTasksText('')
        console.log('caiu aqui',tasks)
    } 

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewTasksText(event.target.value)
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        if (event.target.validity.valueMissing) {
            event.target.setCustomValidity('Por favor, preencha o campo')
        }
    }

    return (
        <form onSubmit={handleCreateTasks} className={styles.form} >
            <input className={styles.input}
                name='task'
                type="text"
                placeholder='Adicione uma tarefa'
                value={newTasksText}
                onChange={(e) => handleNewTaskChange(e)}
                onInvalid={handleNewTaskInvalid}
                required
            />
            <button type="submit" className={styles.button}>Criar</button>


            {tasks.length === 0 ? <p> nada para mostrar</p>:
            <div>
                
            </div>
    
        }

        </form>

       
    )
}

export default Form;