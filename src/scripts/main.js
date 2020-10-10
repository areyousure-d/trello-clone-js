import { 
  createElement, 
  createFragment, 
  appendChild 
} from './domHelpers/createElement';
import dragula from 'dragula';
import '../scss/main.scss';
import App from './components/App';

const root = document.getElementById('app');
root.innerHTML = '';

appendChild(root, <App />);

const listContainers = document.querySelectorAll('.list-container');
const listContainersArray = Array.prototype.slice.call(listContainers);

const board = document.querySelector('.board');

dragula(listContainersArray);

dragula([board], {
  moves: function(el, source, handle, sibling) {
    if (handle.matches('.list-header__name')) {
      return true;
    }
    return false;
  }
});


