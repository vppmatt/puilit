import './pageHeader.css';
import Menu from "./Menu";

const PageHeader = (props) => {
    return (
        <div className="pageHeader">
            <h1>Payments Application</h1>
            <Menu setCurrentPage={props.setCurrentPage} />
        </div>
    );
}

export default PageHeader
