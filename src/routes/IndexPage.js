/* eslint-disable */
import React from 'react';
import { connect } from 'dva';
import { Flex, Tabs, View, Text, Button, List, WhiteSpace } from 'snk-mobile-test';
import MiddleView from '../components/introduce/MiddleView';
import NavBar from '../components/component/SinosafeNavBar';
import BodyLeftView from '../components/introduce/BodyLeftView';
import BodyRightView from '../components/introduce/BodyRightView';
import indexSytle from './IndexSytle';
import Image from '../components/lib/Image';

class IndexPage extends React.Component {
  _toInsuredPage = () => {
    this.props.dispatch({
      type: 'policy/toInsuredPage',
    });
  }
  render() {
    const tabs = [
      { title: '产品方案' },
      { title: '投保需知' },
    ];
    return (
      <Flex direction="column" style={{ backgroundColor: 'white', height: '100%' }}>
        <Flex.Item style={{ ...indexSytle.style.FILL_WIDTH, ...indexSytle.style.FLEX_ITEM_NULL }}>
          <NavBar>君安卡</NavBar>
        </Flex.Item>

        <Flex.Item
          style={{ ...indexSytle.style.FILL_BODY_WIDTH,
            ...indexSytle.style.FILL_WIDTH,
            ...indexSytle.style.FLEX_ITEM }}
        >
          <Image source={require('../assets/images/huaanjuan.png')} style={{ width: '100%' }} />
          <MiddleView />

          <Tabs tabs={tabs} initialPage={0} animated={false} >
            <View >
              <BodyLeftView />
            </View>
            <View >
              <BodyRightView />
            </View>
          </Tabs>
        </Flex.Item>
        <WhiteSpace size="lg" />
        <Flex.Item style={{ ...indexSytle.style.FILL_WIDTH, ...indexSytle.style.FLEX_ITEM_NULL }}>
          <List.Item
            style={{ backgroundColor: '#f5f5f5' }}
            extra={<Button type="primary" size="small" inline onClick={this._toInsuredPage}>下一步</Button>}
          >
            <Text>保费：100元</Text>
          </List.Item>
        </Flex.Item>

      </Flex>
    );
  }
}

function mapStateToProps(state) {
  return { policy: state.policy };
}

export default connect(mapStateToProps)(IndexPage);
