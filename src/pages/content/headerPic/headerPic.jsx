import './index.scss';
import { LeftOutlined } from '@ant-design/icons';
function HeaderPic() {
  return (
    <div className="headerPic">
      <div className="headerTop">
        <LeftOutlined style={{ fontSize: '25px' }} />
        <span style={{ fontSize: '18px' }}>愿望清单</span>
      </div>
    </div>
  );
}
export default HeaderPic;
