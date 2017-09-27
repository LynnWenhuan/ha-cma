
// import moment from 'moment';
import { routerRedux } from 'dva/router';
// import PolicyService from '../services/PolicyService';

const nowTimeStamp = Date.now();
const tomorrowTimeStamp = nowTimeStamp + (24 * 60 * 60 * 1000);
const tomorrow = new Date(tomorrowTimeStamp);

export default {
  namespace: 'policy',
  state: {
    // 投保人信息
    startDate: tomorrow,
    insuredName: null,
    identifyType: '01', // 目前固定身份证
    identifyNumber: null,
    phone: null,

    // 被保人信息
    relationWithHolder: '0', // 目前默认
    clientName: null,
    idNo: null,
    insuredPhone: null,
    insuredAddress: null,

  },
  reducers: {
    save(state, { payload }) {
      if (payload.startDate) {
        // const date = moment(payload.startDate.value._d).format('x') - 0;
        return { ...state, startDate: payload.startDate.value };
      } else if (payload.insuredName) {
        return { ...state, insuredName: payload.insuredName.value };
      } else if (payload.identifyNumber) {
        return { ...state, identifyNumber: payload.identifyNumber.value };
      } else if (payload.phone) {
        return { ...state, phone: payload.phone.value };
      } else if (payload.relationWithHolder) {
        return { ...state, relationWithHolder: payload.relationWithHolder.value[0] };
      } else if (payload.idNo) {
        return { ...state, idNo: payload.idNo.value };
      } else if (payload.insuredPhone) {
        return { ...state, insuredPhone: payload.insuredPhone.value };
      } else if (payload.insuredAddress) {
        return { ...state, insuredAddress: payload.insuredAddress.value };
      } else if (payload.clientName) {
        return { ...state, clientName: payload.clientName.value };
      }
    },
  },
  effects: {
    *toInsuredPage(action, { put }) {
      yield put(routerRedux.push('/insured'));
    },
    *toInsuredInfoPage(action, { put }) {
      yield put(routerRedux.push('/insuredInfo'));
    },
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    //   return history.listen(({ pathname, query }) => {
    //     if (pathname === '/policy') {
    //       dispatch({ type: 'getPolicyInfo', payload: query });
    //     }
    //   });
    // },
  },
};
