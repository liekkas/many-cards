import React from 'react';
import { connect } from 'dva';
import styles from './style.less';
import {Row, Col, Card} from 'antd'

function Home({home}) {
  return (
    <div>
      <Row gutter={24}>
        Waiting For Documented...
      </Row>
    </div>
  );
}

export default connect(({home}) => ({home}))(Home);
