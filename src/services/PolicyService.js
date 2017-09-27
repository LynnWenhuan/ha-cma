// import moment from 'moment';
import HttpUtils from '../utils/HttpUtils';

export default class PolicyService {
  static getPolicyInfo() {
    // const startDate = moment(policy.startDate._d).format('x') - 0;
    return HttpUtils.post({});
  }
}
