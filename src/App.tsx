import NameIcon from './NameIcon';
import './app.css';

const App = () => {
  return (
    <>
      <h2>名前のみ指定</h2>
      <div>
        <dl>
          <dt>&lt;NameIcon userName="山田 太郎" /&gt;</dt>
          <dd>
            <NameIcon userName="山田 太郎" />
          </dd>
          <dt>&lt;NameIcon userName="山田太郎" /&gt;</dt>
          <dd>
            <NameIcon userName="山田太郎" />
          </dd>
          <dt>&lt;NameIcon userName="Mike Davis" /&gt;</dt>
          <dd>
            <NameIcon userName="Mike Davis" />
          </dd>
        </dl>
      </div>
      <h2>各種属性指定</h2>
      <div>
        <dl>
          <dt>
            size：&lt;NameIcon userName="山田 太郎" option={'{{'} size: 20{' '}
            {'}} '}
            /&gt;
          </dt>
          <dd>
            <NameIcon userName="山田 太郎" option={{ size: 20 }} />
          </dd>
          <dt>
            size：&lt;NameIcon userName="山田 太郎" option={'{{'} size: 80{' '}
            {'}} '}
            /&gt;
          </dt>
          <dd>
            <NameIcon userName="山田 太郎" option={{ size: 80 }} />
          </dd>
          <dt>
            色：&lt;NameIcon userName="山田太郎" option={'{{'} foreColor:
            '#69C', backColor: '#FFF2F3' {'}} '}
            /&gt;
          </dt>
          <dd>
            <NameIcon
              userName="山田太郎"
              option={{ foreColor: '#69C', backColor: '#FFF2F3' }}
            />
          </dd>
          <dt>
            Font Family(serif)：&lt;NameIcon userName="山田 太郎" option=
            {'{{'} fontFamily: 'serif' {'}}'} /&gt;
          </dt>
          <dd>
            <NameIcon userName="山田 太郎" option={{ fontFamily: 'serif' }} />
          </dd>
          <dt>
            Font Scale(0.3)：&lt;NameIcon userName="山田 太郎" option={'{{ '}
            fontScale: 0.3 {'}}'} /&gt;
          </dt>
          <dd>
            <NameIcon userName="山田 太郎" option={{ fontScale: 0.3 }} />
          </dd>
          <dt>
            Font Scale(1.0)：&lt;NameIcon userName="山田 太郎" option={'{{ '}
            fontScale: 1.0 {'}}'} /&gt;
          </dt>
          <dd>
            <NameIcon userName="山田 太郎" option={{ fontScale: 1.0 }} />
          </dd>
        </dl>
      </div>
    </>
  );
};

export default App;
