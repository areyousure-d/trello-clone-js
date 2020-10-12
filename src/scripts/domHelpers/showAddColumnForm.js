import { createElement, appendChild } from './createElement';
import List from '../components/List';
import { drakeList } from '../dragula';

function showAddColumnForm(event) {
  event.preventDefault();
  const button = event.target;
  const board = button.closest('.board');
  
  const form = (
    <form onSubmit={submitForm} className="board-form">
      <textarea 
        rows="1"
        className="board-form__textarea"
        placeholder="Ввести заголовок для списка"
      ></textarea>
      <div className="board-form__buttons">
        <input 
          className="board-form__submit" 
          type='submit' 
          value="Добавить колонку"
        />
        <input 
          onClick={(event) => hideForm(button, event)} 
          className="board-form__reset" type='reset' 
          value="Закрыть"
        />
      </div>
    </form>
  );

  button.remove();
  board.append(form);
}

function submitForm() {
  event.preventDefault();
  const value = event.target.children[0].value;
  if (value === '') {
    return;
  }
  event.target.children[0].value = '';
  const board = event.target.closest('.board');
  const boardContainer = board.querySelector('.board-container');
  const form = event.target;
  //appendChild(listContainer, <List name={value} />);
  const list = <List name={value} />;
  const listContainer = list.querySelector('.list-container');
  //board.insertBefore(list, form);
  boardContainer.append(list);
  drakeList.containers.push(listContainer);
}

function hideForm(el, event) {
  const board = event.target.closest('.board');
  const form = event.target.closest('.board-form');
  const button = el;
  form.remove();
  board.append(button);
}

export default showAddColumnForm;

