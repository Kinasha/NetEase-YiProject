import { useState } from 'react';
import './index.scss';
import { Input } from 'antd';

export function Add() {
  const { TextArea } = Input;

  return (
    <div className="add">
      <div className="headerPic">
        <div className="headerTop">
          <span>取消</span>
          <span style={{ fontSize: '18px' }}>愿望清单</span>
        </div>
        <TextArea
          showCount
          maxLength={140}
          placeholder="将你的愿望说给云听..."
          bordered={false}
          style={{ backgroundColor: 'transparent' }}
        />
      </div>
    </div>
  );
}
