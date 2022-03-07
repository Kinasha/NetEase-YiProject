import { useState } from 'react';
import emptyBox from '$images/empty-box.jpg';
function Content() {
  const [todoList, setTodoList] = useState([]);
  const isEmpty = todoList.length === 0;
  return (
    <div>
      {isEmpty ? (
        <img src={emptyBox} alt="empty-box" />
      ) : (
        <h2>this is Content</h2>
      )}
    </div>
  );
}
export default Content;
