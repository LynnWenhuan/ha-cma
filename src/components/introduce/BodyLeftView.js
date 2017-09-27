
import React from 'react';
import { connect } from 'dva';
import { WhiteSpace, View, Text, Flex, WingBlank } from 'snk-mobile-test';
import introduceStyle from './IntroduceSytle';

class BodyLeftView extends React.Component {
  render() {
    return (
      <View>
        <WhiteSpace size="lg" />
        <WingBlank size="sm">
          <table style={{ borderCollapse: 'collapse' }}>
            <tbody>
              <tr >
                <th style={{ ...introduceStyle.style.TABLE }}>保险责任</th>
                <th style={{ ...introduceStyle.style.TABLE }}>保险金额</th>
                <th style={{ ...introduceStyle.style.TABLE }}>适用条款</th>
              </tr>
              <tr >
                <td style={{ ...introduceStyle.style.TABLE }}>意外伤害身故、残疾保险</td>
                <td style={{ ...introduceStyle.style.TABLE }}>100000</td>
                <td style={{ ...introduceStyle.style.TABLE }}>华安个人人身意外伤害保险条款</td>
              </tr>
              <tr >
                <td style={{ ...introduceStyle.style.TABLE }}>意外伤害医疗保险</td>
                <td style={{ ...introduceStyle.style.TABLE }}>10000</td>
                <td style={{ ...introduceStyle.style.TABLE }}>华安附加个人意外伤害医疗保险条款</td>
              </tr >
              <tr >
                <td style={{ ...introduceStyle.style.TABLE }}>意外伤害住院津贴保险</td>
                <td style={{ ...introduceStyle.style.TABLE }}>每日50元，限180天</td>
                <td style={{ ...introduceStyle.style.TABLE }}>华安附加意外伤害住院津贴保险条款</td>
              </tr>
              <tr >
                <td style={{ ...introduceStyle.style.TABLE }}>保险费</td>
                <td style={{ ...introduceStyle.style.TABLE }}>人民币壹佰元整（￥100）</td>
                <td style={{ ...introduceStyle.style.TABLE }} />
              </tr>
              <tr >
                <td style={{ ...introduceStyle.style.TABLE }}>保险期限</td>
                <td style={{ ...introduceStyle.style.TABLE }}>壹年</td>
                <td style={{ ...introduceStyle.style.TABLE }} />
              </tr>
              <tr >
                <td style={{ ...introduceStyle.style.TABLE }}>被保险人年龄</td>
                <td style={{ ...introduceStyle.style.TABLE }}>6-65周岁</td>
                <td style={{ ...introduceStyle.style.TABLE }} />
              </tr>
            </tbody>
          </table>
          <WhiteSpace size="lg" />
          <Flex justify="start">
            <Text >
              保险责任特约</Text>
          </Flex>
          <Flex justify="start">
            <Text style={{ textIndent: 30 }}>
              1、被保险人均为一至六类职业人员。</Text>
          </Flex>
          <Flex justify="start">
            <Text style={{ textIndent: 30 }}>
              2、经投保人和保险人双方约定，被保险人发生保险事故时，保险人将按照被保险人保险事故发生时的职业类别调整保险金给付标准，
            具体给付标准为： 100%（一类）、100%（二类）、100%（三类）、60%（四类）、15%（五类）、10%（六类）、0%（七类）。
            未尽事宜详见《华安附加按职业类别调整保险金给付比例保险条款》。</Text>
          </Flex>
        </WingBlank>
      </View>
    );
  }
}

export default connect()(BodyLeftView);
