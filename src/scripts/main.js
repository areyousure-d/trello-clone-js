import { 
  createElement, 
  createFragment, 
  appendChild 
} from './domHelpers/createElement';
import '../scss/main.scss';
import App from './components/App';
import {drakeList} from './dragula';
import {drakeBoard} from './dragula';

const root = document.getElementById('app');
root.innerHTML = '';

appendChild(root, <App />);

const listContainers = document.querySelectorAll('.list-container');
const listContainersArray = Array.prototype.slice.call(listContainers);

const board = document.querySelector('.board');
const boardContainer = document.querySelector('.board-container');

drakeList.containers.push(...listContainersArray)

drakeBoard.containers.push(boardContainer);

/*
const drake = dragula(listContainersArray);

const drake2 = dragula([board], {
  moves: function(el, source, handle, sibling) {
    if (handle.matches('.list-header__name')) {
      return true;
    }
    return false;
  }
});
*/

