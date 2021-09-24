import React, { useState } from 'react';
import toggler from './toggler.svg';
import styles from './menu.module.css';
const navlist = ["Home", "Product", "About", "Contact", "Privacy", "FAQ"];

export default function Menu() {
    let [state, setstate] = useState(false);

    function Navbar() {
        if (state) {
            let loop = navlist.map(ele => NavItem(ele));
            return (
                <div className={styles.navs}>
                    {loop}
                </div>
            );
        } else {
            return false;
        }
    }
    function NavItem(props) {
        let propsClone = props;
        return (
            <div key={propsClone} className={styles.item}>
                <a className={styles.link} href="#/">{propsClone}</a>
            </div>
        );
    }
    //turn this off for module.css it can not find toggler
    window.onclick = function (e) {
        if (!e.target.classList.contains("toggler")) {
            setstate(false);
        }
    }
    function checker(e) {
        setstate(state ? false : true);
        /* if (state) {
            setstate(false);
        } else {
            setstate(true);
        } */
        //console.log(state, e);
    }
    return (
        <div className={styles.menubar}>
            <img onClick={checker} className={styles.toggler + " toggler"} src={toggler} alt="toggler" />

            <nav className={styles.navbar}><Navbar /></nav>
        </div>
    );
}