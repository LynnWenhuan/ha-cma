

import React from 'react';
import { connect } from 'dva';
import { createForm } from 'rc-form';

import { InputItem, WhiteSpace, View, Text, List, Flex, DatePicker, Picker } from 'snk-mobile-test';

class InsuredMiddleView extends React.Component {
  render() {
    const { form: { getFieldProps }, policy } = this.props;
    //  value={applicant.identifyNumber} ,  value={moment(policy.startDate).locale('zh-cn')}
    const Data = [{ label: '本人', value: '0' }, { label: '子女', value: '3' }, { label: '配偶', value: '1' },
      { label: '父母', value: '2' }];
    const nowTimeStamp = Date.now();
    const tomorrowTimeStamp = nowTimeStamp + (24 * 60 * 60 * 1000);
    const tomorrow = new Date(tomorrowTimeStamp);
    return (
      <View>
        <List>
          <DatePicker {...getFieldProps('startDate')} mode="date" value={policy.startDate} minDate={tomorrow}>
            <List.Item arrow="horizontal">
              <Flex justify="start">
                <Text>投保起期</Text>
              </Flex>
            </List.Item>
          </DatePicker>
        </List>
        <WhiteSpace size="lg" style={{ backgroundColor: '#f5f5f5' }} />
        <WhiteSpace size="lg" />
        <Text>投保人信息</Text>
        <WhiteSpace size="lg" />
        <List>

          <InputItem
            clear
            placeholder="投保人姓名"
            {...getFieldProps('insuredName')}
            value={policy.insuredName}
          >
            <Text>姓名</Text>
          </InputItem>
          <InputItem
            clear
            placeholder="投保人身份证号码"
            {...getFieldProps('identifyNumber')}
            value={policy.identifyNumber}
          >
            <Text >身份证号</Text>
          </InputItem>
          <InputItem
            clear
            placeholder="投保人手机号码"
            {...getFieldProps('phone')}
            value={policy.phone}
          >
            <Text>手机号码</Text>
          </InputItem>
        </List>

        <WhiteSpace size="lg" style={{ backgroundColor: '#f5f5f5' }} />
        <WhiteSpace size="lg" />
        <Text>被投保人信息</Text>
        <WhiteSpace size="lg" />
        <List>

          <Picker
            value={policy.relationWithHolder}
            data={Data}
            cols={1}
            {...getFieldProps('relationWithHolder', { initialValue: [policy.relationWithHolder] })}
          >
            <List.Item arrow="horizontal">
              <Flex justify="start">
                <Text >与投保人关系</Text>
              </Flex>
            </List.Item>
          </Picker>
          <InputItem
            clear
            placeholder="被保人姓名"
            {...getFieldProps('clientName')}
            value={policy.clientName}
          >
            <Text>姓名</Text>
          </InputItem>
          <InputItem
            clear
            placeholder="被保人身份证号码"
            {...getFieldProps('idNo')}
            value={policy.idNo}
          >
            <Text >身份证号</Text>
          </InputItem>
          <InputItem
            clear
            placeholder="被保人手机号码"
            {...getFieldProps('insuredPhone')}
            value={policy.insuredPhone}
          >
            <Text>手机号码</Text>
          </InputItem>
          <InputItem
            clear
            placeholder="被保人详细地址"
            {...getFieldProps('insuredAddress')}
            value={policy.insuredAddress}
          >
            <Text>详细地址</Text>
          </InputItem>
        </List>

      </View>
    );
  }
}

function mapStateToProps(state) {
  return { policy: state.policy };
}

export default connect(mapStateToProps)(createForm({
  onFieldsChange(props, fields) {
    props.dispatch({
      type: 'policy/save',
      payload: fields,
    });
  },
})(InsuredMiddleView));
