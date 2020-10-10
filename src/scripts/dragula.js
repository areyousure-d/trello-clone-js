import dragula from 'dragula';

const drakeList = dragula([]);

const drakeBoard = dragula([], {
  moves: function(el, source, handle, sibling) {
    if (handle.matches('.list-header__name')) {
      return true;
    }
    return false;
  }
});

export {
  drakeList,
  drakeBoard,
};

