/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-14 09:37:53
 * @LastEditors: wujian
 * @LastEditTime: 2021-09-02 16:10:39
 */
import styles from './index.less';
import { connect, Link } from 'umi';
import { useEffect } from 'react';
import HomeComponent from '../echart';
import FormDemo from '../form/index1';
import OhterComponent from '../other';
import { useState } from 'react';
import { Button } from 'antd';
import { useCallback } from 'react';
import { useMemo } from 'react';
import { ModuleState } from './data';
import TagsDialog from '../TagsDialog';

function IndexPage(props: any) {
  useEffect(() => {
    console.log(props, 'props');
  });

  const [time, setTime] = useState(+new Date());
  //   const test = () => {
  //     console.log('222');
  //   };

  const test = useCallback(() => console.log('222'), []);

  const info = useMemo(() => ({ time }), [time]); // 缓存time 值
  //   const info = useMemo(
  //     () => ({
  //       id: 2,
  //     }),
  //     [],
  //   );

  const [val, setVal] = useState(0);

  //   const [age, setAge] = useState(100);

  const age = useMemo(() => ({ id: 100, name: 50 }), []);
  const [list, setList] = useState([1, 2, 3]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log('update', props);
  });
  return (
    <div>
      <h1 className={styles.title}>首页</h1>
      <Button onClick={() => setVisible(true)}>other</Button>
      <Button onClick={() => props.history.push('/home')}>other</Button>
      <Button onClick={() => props.history.push('/home')}>other</Button>
      <h2>{val}</h2>
      <Button type="primary" onClick={() => setVal(val + 5)}>
        changeTime
      </Button>
      <HomeComponent></HomeComponent>
      {/* <FormDemo info={list} test={test}></FormDemo> */}
      <OhterComponent list={list} />

      {visible && (
        <TagsDialog
          onClose={() => setVisible(false)}
          onConfirm={() => setVisible(false)}
          tags={[]}
        />
      )}
    </div>
  );
}

const mapStateToProps = ({ Index }: any) => ({
  ...Index,
});

const mapDispatchToProps = (dispatch: any) => ({
  save: (payload: any) => dispatch({ type: 'Index/save', payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
