import React from 'react';
import { connect } from 'dva';
import { Flex, Text, Button, List, WhiteSpace, Toast } from 'snk-mobile-test';
import InsuredMiddleView from '../components/insured/InsuredMiddleView';
import NavBar from '../components/component/SinosafeNavBar';
import indexSytle from './IndexSytle';
import CheckUtils from '../components/lib/CheckUtils';

class InsuredPage extends React.Component {
  _toInsuredInfoPage = () => {
    const policy = this.props.policy;
    if (!CheckUtils.checkMobile(policy.phone)) {
      Toast.info('请正确输入投保人手机号', 1.5, null, false);
    } else if (!CheckUtils.checkMobile(policy.insuredPhone)) {
      Toast.info('请正确输入被保人手机号', 1.5, null, false);
    } else if (!CheckUtils.checkName(policy.insuredName) || !policy.insuredName) {
      Toast.info('请正确输入投保人姓名', 1.5, null, false);
    } else if (!CheckUtils.checkName(policy.clientName) || !policy.clientName) {
      Toast.info('请正确输入被保人姓名', 1.5, null, false);
    } else if (!CheckUtils.checkIdentityCode(policy.identifyNumber)) {
      Toast.info('请正确输入投保人身份证号', 1.5, null, false);
    } else if (!CheckUtils.checkIdentityCode(policy.idNo)) {
      Toast.info('请正确输入被保人身份证号', 1.5, null, false);
    } else if (!policy.insuredAddress) {
      Toast.info('请输入地址', 1.5, null, false);
    } else {
      this.props.dispatch({
        type: 'policy/toInsuredInfoPage',
      });
    }
  }
  render() {
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
          <InsuredMiddleView />
        </Flex.Item>
        <WhiteSpace size="lg" />
        <Flex.Item style={{ ...indexSytle.style.FILL_WIDTH, ...indexSytle.style.FLEX_ITEM_NULL }}>
          <List.Item
            style={{ backgroundColor: '#f5f5f5' }}
            extra={<Button type="primary" size="small" inline onClick={this._toInsuredInfoPage}>下一步</Button>}
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

export default connect(mapStateToProps)(InsuredPage);
