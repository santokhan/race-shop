import Brand from './brand/brand';
import Links from './links/links';
import Subscribe from './subscribe/subscribe';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.App__footer}>
            <div className={styles.footer__grid}>
                <Brand></Brand>
                <Links></Links>
                <Subscribe></Subscribe>
            </div>
            <hr className={styles.hr__end} />
            <div className={styles.copyright}>
                <p>Copyright @2021 all right reserved.<a href="https://santokhan.github.io" className="link">Santo</a></p>
            </div>
        </footer>
    );
}