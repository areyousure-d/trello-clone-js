import { createElement, createFragment } from '../domHelpers/createElement';
import Header from './Header';
import Board from './Board';
import List from './List';
import ListItem from './ListItem';

const App = (props) => {
  return (
    <>
      <Header />
      <Board>
        <List name="Прочитать">
          <ListItem name="Великий Гэтсби" />
          <ListItem name="Горе от ума" />
          <ListItem name="Грозовой перевал" />
          <ListItem name="Собор Парижской Богоматери" />
          <ListItem name="Портрет Дорирана Грея" />
          <ListItem name="Финансист" />
        </List>
        <List name="В процессе">
          <ListItem name="Идиот" />
        </List>
        <List name="Прочитано">
          <ListItem name="Над пропастью во ржи" />
          <ListItem name="Коллекционер" />
          <ListItem name="Маленький принц" />
        </List>
      </Board>
    </>
  );
}

export default App;

