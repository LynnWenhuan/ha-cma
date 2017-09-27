
import React from 'react';
import { connect } from 'dva';
import { WhiteSpace, View, Text, Flex } from 'snk-mobile-test';

class BodyRightView extends React.Component {
  render() {
    return (
      <View>
        <WhiteSpace size="lg" />

        <Flex justify="start">
          <Text style={{ textIndent: 30 }}>
            一、投保人应为年满18周岁具有完全民事行为能力，可以是被保险人本人或对被保险人有保险利益的其他人。未成年人作为被保险人应由其监护人为其投保。</Text>
        </Flex>
        <Flex justify="start">
          <Text style={{ textIndent: 30 }}>二、本卡每人限投三份，多投无效。</Text>
        </Flex>
        <Flex justify="start">
          <Text style={{ textIndent: 30 }}>三、保险期间：本保险保险期间为一年。</Text>
        </Flex>
        <Flex justify="start">
          <Text style={{ textIndent: 30 }}>四、保险地域：各项保险责任仅限于中国境内有效（不含香港、澳门和台湾地区）。</Text>
        </Flex>
        <Flex justify="start">
          <Text style={{ textIndent: 30 }}>
            五、受益人：本保险的意外伤残、意外医疗的保险金受益人为被保险人本人，意外身故保险金按照继承法相关规定处理。 </Text>
        </Flex>
        <Flex justify="start">
          <Text style={{ textIndent: 30 }}>
            六、本卡承保职业类别范围为一至六类职业（含六类），不含七类，请仔细阅读职业分类表并核对您的职业是否属于本卡承保的职业类别范围。</Text>
        </Flex>
        <Flex justify="start">
          <Text style={{ textIndent: 30 }}>
            七、按《关于父母为其未成年子女投保以死亡为给付保险金条件人身保险有关问题的通知》（保监发〔2015〕90号）规定，
                  未成年人死亡给付保险金在各家保险公司的总和按以下限额执行：
                  （1）对于被保险人不满10周岁的，不得超过人民币20万元；
                  （2）对于被保险人已满10周岁但未满18周岁的，不得超过人民币50万元。</Text>
        </Flex>
        <Flex justify="start">
          <Text style={{ textIndent: 30 }}>
          八、本保单意外医疗费用给付标准：保险人对一次事故中100元以内（含100元）的医疗、医药费用不承担给付责任，
          对于一次事故中100元以上部分的医疗、医药费用按80％的比例在保险金额内予以补偿。</Text>
        </Flex>
        <WhiteSpace size="lg" />
        <Flex justify="start">
          <Text style={{ textIndent: 30 }}>
          特别说明：未尽事宜，请参照保险人《华安个人人身意外伤害保险条款》、《华安附加个人意外伤害医疗保险条款》、
          《华安附加意外伤害住院津贴保险条款》与《华安附加按职业类别调整保险金给付比例保险条款》，
          激活本卡前请认真阅读上述条款。</Text>
        </Flex>
      </View>
    );
  }
}

export default connect()(BodyRightView);
