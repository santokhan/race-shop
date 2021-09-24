import Navs from './navbar/navs';
import Name from './name/name';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.app__header}>
            <Navs></Navs>
            <Name></Name>
        </header>
    );
}