import { createElement } from '../domHelpers/createElement';

function ListItem (props) {
  return (
    <div className="list-container__item">
      { props.name }
    </div>
  );
}

export default ListItem;

