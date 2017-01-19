/**
 * Created by liekkas on 2017/1/17.
 */

import React from 'react'
import styled from 'styled-components'
import {Table} from 'antd'
import {Card} from '../../../../dist'

const Root = styled.div`

`

const columns = [
  {
    title: 'Property',
    key: 'prop',
    dataIndex: 'prop'
  },
  {
    title: 'Description',
    key: 'desc',
    dataIndex: 'desc'
  },
  {
    title: 'Type',
    key: 'type',
    dataIndex: 'type'
  },
  {
    title: 'Default',
    key: 'defaultValue',
    dataIndex: 'defaultValue'
  }
]

const API = ({data}) => {
  return (
    <Card headerText={'API'} headerIcon={'fa fa-book'}>
       <Table columns={columns} dataSource={data} pagination={false} bordered/>
    </Card>
  )
}

export default API
