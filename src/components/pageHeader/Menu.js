

const Menu = (props) => {

    const find = () => {
        props.setCurrentPage("find");
    }

    const add = () => {
        props.setCurrentPage("add");
    }

    return (
        <ul className="nav">
            <li onClick={find}>Find a transaction</li>
            <li onClick={add}>New transaction</li>
        </ul>
    );
}

export default Menu;
