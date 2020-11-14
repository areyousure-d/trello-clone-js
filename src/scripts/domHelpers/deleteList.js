
function deleteList (event) {
  event.preventDefault();
  const button = event.target;
  const list = button.closest('.list');

  list.remove();
}

export default deleteList;

