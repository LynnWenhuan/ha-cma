
import React from 'react';
import { connect } from 'dva';
import { Card, WhiteSpace, View, Text, List, Flex } from 'snk-mobile-test';

class MiddleView extends React.Component {
  render() {
    return (
      <View>
        <List.Item style={{ backgroundColor: '#f5f5f5' }}>
          <Flex justify="between" >
            <Text>承保年龄：6-65周岁</Text>
            <Text>承保期限：1年</Text>
          </Flex>
        </List.Item>
        <Card>
          <Card.Body>
            <View>
              <Text>产品特点</Text>
              <Flex justify="start">
                <Text style={{ textIndent: 30 }}>1、价格低廉：低于市面价格20%</Text>
              </Flex>
              <Flex justify="start">
                <Text style={{ textIndent: 30 }}>2、适用广：涵盖职业类别1-6类，年龄6周岁至65周岁</Text>
              </Flex>
              <Flex justify="start">
                <Text style={{ textIndent: 30 }}>3、保额灵活：由出险时职业类别确定</Text>
              </Flex>
              <Flex justify="start">
                <Text style={{ textIndent: 30 }}>4、门诊保额高：赔偿限额最高至1万元</Text>
              </Flex>
              <WhiteSpace size="lg" />
              <Text>产品价格</Text>
              <Flex justify="start">
                <Text style={{ textIndent: 30 }}>每人每年100元</Text>
              </Flex>
              <Flex justify="start">
                <Text style={{ textIndent: 30 }}>（每人限购3份，未成年人限购1份）</Text>
              </Flex>
            </View>
          </Card.Body>
        </Card>

      </View>
    );
  }
}

export default connect()(MiddleView);
