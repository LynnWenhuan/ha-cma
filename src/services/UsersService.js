import HttpUtils from '../utils/HttpUtils';

export default {
  queryUsers(page) {
    return HttpUtils.get({ url: `/users?page=${page}` });
  },
  remove(id) {
    return HttpUtils.delete({ url: `/users/${id}` });
  },
  update(id, value) {
    return HttpUtils.patch({ url: `/users/${id}`, body: value });
  },
  create(value) {
    return HttpUtils.post({ url: '/users', body: value });
  },
};
