import Items from './items/items';
import styles from './grid.module.css';
import item from './item.json';

// console.log(item);

function CreateGrid(props) {
    let propsClone = props.children;
    // console.log(propsClone);
    let allItems = propsClone.map((ele, index) => <Items key={index.toString()}>{ele}</Items>);
    return allItems;
}

export default function Grid() {
    return (
        <div className={styles.App__grid}>
            <CreateGrid>{item}</CreateGrid>
        </div>
    );
}