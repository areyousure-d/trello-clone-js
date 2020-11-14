import { createElement } from '../domHelpers/createElement';
import showForm from '../domHelpers/showForm';

// из-за реализации createElement требуется два аргумента (props, ...children)
export default function (props, ...children) {
  return (
    <div className="list">
      <div className="list-header">
        <h2 className="list-header__name">{ props.name }</h2>
      </div>
      <div className="list-container">
        { children }
      </div> 
      <div className="list-footer">
        <button 
          onClick={showForm} 
          className="list-add-item-button"
        >Добавить еще одну карточку</button>
      </div>
    </div>
  );
}

