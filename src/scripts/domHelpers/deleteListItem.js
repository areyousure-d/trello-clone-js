
function deleteListItem (event) {
  event.preventDefault();

  const button = event.target;
  const listItem = button.closest('.list-container__item');

  listItem.remove();
}


export default deleteListItem;

