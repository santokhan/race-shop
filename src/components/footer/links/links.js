import styles from './links.module.css';
export default function Links(params) {
    let linkArr = ["Home", "About", "Contact", "Privacy", "FAQ"];
    let linkRight = ["Overview", "Client", "Forum", "Office"];

    return (
        <div className={styles.pages}>
            <div className={styles.title}>Pages</div>
            <div className={styles.links__container}>
                <CreateLink>{linkArr}</CreateLink>
                <CreateLink>{linkRight}</CreateLink>
            </div>
        </div>
    );
}

function CreateLink(params) {
    const clone = params.children;

    let linkSet = clone.map(ele => {
        return (
            <li key={ele} className={styles.item}><a href={"#/" + ele} className={styles.link}>{ele}</a></li>
        )
    });

    return (
        <ul className={styles.link__box}>
            {linkSet}
        </ul>
    );
};