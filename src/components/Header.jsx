
//dentro de styles, é onde está o meu css (a estilização)
import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return(
        //Utilizar sempre className, ao invés de class
        //Utilizado chaves para inserir uma variável JS no HTML
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    );
}