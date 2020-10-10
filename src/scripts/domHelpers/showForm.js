import { createElement, appendChild } from './createElement';
import ListItem from '../components/ListItem';

function showForm (event){
  const button = event.target;
  const list = button.closest('.list');
  const listFooter = list.querySelector('.list-footer');

  const form = (
    <form onSubmit={submitForm} className="list-form">
      <textarea 
        rows="3"
        className="list-form__textarea"
        placeholder="Ввести заголовок для этой карточки"
      ></textarea>
      <div className="list-form__buttons">
        <input 
          className="list-form__submit" 
          type='submit' 
          value="Добавить карточку"
        />
        <input 
          onClick={(event) => hideForm(button, event)} 
          className="list-form__reset" type='reset' 
          value="Закрыть"
        />
      </div>
    </form>
  );
  button.remove();
  listFooter.append(form);
}

function hideForm (el, event) {
  const footer = event.target.closest('.list-footer');
  const form = event.target.closest('.list-form');
  const button = el;
  form.remove();
  footer.append(button);
}

function submitForm (event) {
  event.preventDefault();
  const value = event.target.children[0].value;
  if (value === '') {
    return;
  }
  event.target.children[0].value = '';
  const list = event.target.closest('.list');
  const listContainer = list.querySelector('.list-container');
  appendChild(listContainer, <ListItem name={value} />);
}

export default showForm;

