

import React from 'react';
import { connect } from 'dva';
import moment from 'moment';

import { WhiteSpace, View, Text, List, Flex } from 'snk-mobile-test';

class InsuredMiddleView extends React.Component {
  render() {
    const Item = List.Item;
    const { policy } = this.props;
    //  value={applicant.identifyNumber} ,  value={moment(policy.startDate).locale('zh-cn')}
    const relationData = { 0: '本人', 3: '子女', 1: '配偶', 2: '父母' };
    const startDate = moment(policy.startDate).format('YYYY年MM月DD日');
    return (
      <View>
        <List>
          <Item>
            <Flex justify="between" >
              <Text >保险起期</Text>
              <Text >{startDate}</Text>
            </Flex>
          </Item>
        </List>
        <WhiteSpace size="lg" style={{ backgroundColor: '#f5f5f5' }} />
        <WhiteSpace size="lg" />
        <Text>投保人信息</Text>
        <WhiteSpace size="lg" />
        <List>
          <Item>
            <Flex justify="between" >
              <Text >投保人姓名</Text>
              <Text >{policy.insuredName}</Text>
            </Flex>
          </Item>
          <Item>
            <Flex justify="between" >
              <Text >身份证号码</Text>
              <Text >{policy.identifyNumber}</Text>
            </Flex>
          </Item>
          <Item>
            <Flex justify="between" >
              <Text >手机号码</Text>
              <Text >{policy.phone}</Text>
            </Flex>
          </Item>
        </List>

        <WhiteSpace size="lg" style={{ backgroundColor: '#f5f5f5' }} />
        <WhiteSpace size="lg" />
        <Text>被投保人信息</Text>
        <WhiteSpace size="lg" />
        <List>
          <Item>
            <Flex justify="between" >
              <Text >与投保人关系</Text>
              <Text >{relationData[policy.relationWithHolder]}</Text>
            </Flex>
          </Item>
          <Item>
            <Flex justify="between" >
              <Text >被保人姓名</Text>
              <Text >{policy.clientName}</Text>
            </Flex>
          </Item>
          <Item>
            <Flex justify="between" >
              <Text >身份证号码</Text>
              <Text >{policy.idNo}</Text>
            </Flex>
          </Item>
          <Item>
            <Flex justify="between" >
              <Text >手机号码</Text>
              <Text >{policy.insuredPhone}</Text>
            </Flex>
          </Item>
          <Item>
            <Flex justify="between" >
              <Text >详细地址</Text>
              <Text >{policy.InsuredAddress}</Text>
            </Flex>
          </Item>
        </List>

      </View>
    );
  }
}

function mapStateToProps(state) {
  return { policy: state.policy };
}

export default connect(mapStateToProps)(InsuredMiddleView);
