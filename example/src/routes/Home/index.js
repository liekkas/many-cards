import React from 'react';
import { connect } from 'dva';
import styles from './style.less';
import {Row, Col, Card} from 'antd'

function Home({home}) {
  return (
    <div>
      <Row gutter={24}>
        whats're you cry big right
      </Row>
    </div>
  );
}

export default connect(({home}) => ({home}))(Home);
