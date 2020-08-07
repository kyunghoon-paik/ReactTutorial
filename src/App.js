import React from 'react';
import {Rectangle} from 'react-shapes';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import UndoRedo from './containers/UndoRedo'

const App = () => (
  // <div>
  //   <AddTodo />
  //   <VisibleTodoList />
  //   <Footer />
  //   <UndoRedo />
  //   <Rectangle width={100} height={100} />
  // </div>
  <div>
    <VisibleTodoList listId="1" />
    <VisibleTodoList listId="2" />
    <VisibleTodoList listId="3" />
  </div>
  //각 VisibleTodoList container는, listId에 따라 다른 state들을 가짐
  //따라서, 우리는 getVisibleityFilter, getTodos를 바꿔야함
)

export default App;
