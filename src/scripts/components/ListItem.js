import { createElement } from '../domHelpers/createElement';

import deleteListItem from '../domHelpers/deleteListItem';

function ListItem (props) {
  return (
    <div className="list-container__item">
      { props.name }
      <button 
        onClick={deleteListItem}
        className="list-container__delete-btn" 
        type="button"
      >Удалить</button>
    </div>
  );
}

export default ListItem;

