import { Button } from 'antd';
const defaultStyle = {
  backgroundColor: '#FF3A3A',
  width: '200px',
  height: '48px',
  fontSize: '18px',
};
function RButton(props) {
  const { text = '立即开始', style = {}, href = '/' } = props;
  return (
    <Button
      type="primary"
      shape="round"
      style={{
        ...defaultStyle,
        ...style,
      }}
    >
      <a href={href}>{text}</a>
    </Button>
  );
}
export default RButton;
