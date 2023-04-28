import styles from './Header.module.css';

import ignitelogo from '../assets/ignite-logo.svg';

function Header () {
    return (
        <header className={styles.header}>
            <img src={ignitelogo} alt="logotipo do ignite" />
        </header>

    );
}

export default Header;