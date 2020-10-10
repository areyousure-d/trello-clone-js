import { createElement } from '../domHelpers/createElement';
import showAddColumnForm from '../domHelpers/showAddColumnForm';

export default function(props, ...children) {
  return (
    <div className="board">
      { children }
      <button onClick={showAddColumnForm} className="board__add-button">Добавьте еще одну колонку</button>
    </div>
  );
}

