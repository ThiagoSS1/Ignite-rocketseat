import styles from './Header.module.css';

import logo from '../assets/Logo.png';

 function Header () {
  return (
    <header className={styles.header}>
      <img className={styles.img}  src={logo} alt="" />
    </header>
  );
}

export default Header;