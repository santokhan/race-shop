import Menu from './menubar/menu';
import Logo from './logo/logo';
import User from './user/user';
import styles from './navs.module.css';

export default function Navs() {
    return (
        <div className={styles.topbar}>
            <Menu></Menu>
            <Logo></Logo>
            <User></User>
        </div>
    );
}
