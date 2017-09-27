import React from 'react';
import { connect } from 'dva';
import { Flex, Checkbox, Text, Button, List, WhiteSpace } from 'snk-mobile-test';
import InsuredInfoMiddleView from '../components/insured/InsuredInfoMiddleView';
import NavBar from '../components/component/SinosafeNavBar';
import indexSytle from './IndexSytle';

class InsuredInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checkValue: false };
  }

  onChange = (value) => {
    this.setState(
      { checkValue: value.target.checked },
    );
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
          <InsuredInfoMiddleView />
          <WhiteSpace size="lg" />
          <Flex justify="end">
            <Checkbox onChange={this.onChange} checked={this.state.checkValue} />
            <Text>我已阅读并同意《保险条款》</Text>
          </Flex>
          <WhiteSpace size="lg" />
        </Flex.Item>


        <Flex.Item style={{ ...indexSytle.style.FILL_WIDTH, ...indexSytle.style.FLEX_ITEM_NULL }}>
          <List.Item
            style={{ backgroundColor: '#f5f5f5' }}
            extra={<Button type="primary" size="small" inline disabled={!this.state.checkValue}>立刻提交</Button>}
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

export default connect(mapStateToProps)(InsuredInfoPage);
