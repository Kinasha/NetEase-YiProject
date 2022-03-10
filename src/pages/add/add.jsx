import { useState } from 'react';
import './index.scss';
import { Input } from 'antd';

export function Add() {
  const { TextArea } = Input;
  const [todoContent, setTodoContent] = useState('');
  return (
    <div className="add">
      <div className="add_headerPic">
        <div className="add_headerTop">
          <span
            style={{ fontSize: '18px' }}
            onClick={() => (window.location.href = '/Content')}
          >
            取消
          </span>
          <span
            style={{ fontSize: '18px' }}
            onClick={() => console.log(todoContent)}
          >
            确定
          </span>
        </div>
        <TextArea
          showCount
          maxLength={140}
          placeholder="将你的愿望说给云听..."
          bordered={false}
          style={{ backgroundColor: 'transparent' }}
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
        />
      </div>
    </div>
  );
}
