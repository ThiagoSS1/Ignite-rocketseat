import './global.css';
import styles from './App.module.css';
import  Header  from './components/Header';
import Form from './components/Form';



function App () {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Form />
    </div>
  );
}

export default App;