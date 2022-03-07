import { useState } from 'react';
import Empty from './empty/empty';
import HeaderPic from './headerPic/headerPic';
import './index.scss';
function Content() {
  const [todoList, setTodoList] = useState([]);
  const isEmpty = todoList.length === 0;
  return (
    <div className="content">
      <HeaderPic />
      {isEmpty ? <Empty /> : <h2>this is Content</h2>}
    </div>
  );
}
export default Content;
