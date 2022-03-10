import emptyBox from '$images/empty-box.jpg';
import RButton from '$components/button/button';
import './empty.scss';
function Empty() {
  return (
    <div className="emptyBox">
      <img src={emptyBox} alt="empty-box" />
      <p>你还没有愿望哦</p>
      <RButton
        text="写下你的愿望"
        style={{ width: '188px', height: '40px', fontSize: '16px' }}
        href="Add"
      />
    </div>
  );
}
export default Empty;
