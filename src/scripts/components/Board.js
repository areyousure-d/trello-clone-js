import { createElement } from '../domHelpers/createElement';
import showAddColumnForm from '../domHelpers/showAddColumnForm';

// из-за реализации createElement требуется два аргумента (props, ...children)
export default function(props, ...children) {
  return (
    <div className="board">
      <div className="board-container">{ children }</div>
      <button onClick={showAddColumnForm} className="board__add-button">Добавьте еще одну колонку</button>
    </div>
  );
}

