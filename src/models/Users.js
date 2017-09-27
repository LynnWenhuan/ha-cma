
import { routerRedux } from 'dva/router';
import UsersService from '../services/UsersService';

// const PAGE_SIZE = 5;
export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
    refreshing: true,
    page: 0,
    hasMore: true,
    id: null, // 编辑用户
    name: null,
    email: null,
    website: null,
  },
  reducers: {
    save(state, { payload }) {
      if (payload.users) {
        const { users: list, total, page } = payload;
        const l = [...state.list, ...list];
        return { ...state, list: l, total, page };
      } else if (typeof payload.refreshing !== 'undefined') {
        return { ...state, refreshing: payload.refreshing };
      } else if (typeof payload.hasMore !== 'undefined') {
        return { ...state, hasMore: payload.hasMore };
      } else if (payload.name) {
        return { ...state, name: payload.name.value };
      } else if (payload.email) {
        return { ...state, email: payload.email.value };
      } else if (payload.website) {
        return { ...state, website: payload.website.value };
      } else if (typeof payload.page !== 'undefined') {
        return { ...state, page: payload.page };
      } else if (payload.list) {
        return { ...state, list: payload.list };
      }
      return state;
    },
    setUserInfo(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *queryUsers({ payload: { page } }, { call, put, select }) {
      if (page === 1) {
        yield put({ type: 'save', payload: { list: [] } });
      }

      yield put({ type: 'save', payload: { refreshing: true } });
      const { users, total } = yield call(UsersService.queryUsers, page);
      yield put({ type: 'save', payload: { users, total, page } });
      yield put({ type: 'save', payload: { refreshing: false } });

      const { list } = yield select(state => state.users);
      const hasMore = list.length < total;
      console.log(`hasMore:${hasMore}___page:${page}`);
      yield put({ type: 'save', payload: { hasMore } });
    },
    *remove({ payload: id }, { call, put, select }) {
      yield call(UsersService.remove, id);
      const { list } = yield select(state => state.users);
      const l = list.filter(i => i.id !== id);
      yield put({ type: 'save', payload: { list: l } });
      // yield put({ type: 'queryUsers', payload: { page: 0 } });
    },
    *patch({ payload: { id, values } }, { call, put }) {
      console.log(values);
      yield call(UsersService.update, id, values);
      // const page = yield select(state => state.users.page);
      yield put({ type: 'queryUsers', payload: { page: 0 } });
      yield put(routerRedux.goBack());
    },
    *create({ payload: values }, { call, put }) {
      yield call(UsersService.create, values);
      // const page = yield select(state => state.users.page);
      yield put({ type: 'queryUsers', payload: { page: 0 } });
      yield put(routerRedux.goBack());
    },
    *toUserBasicInfo(action, { put }) {
      const { type } = action.payload;
      if (type === 0) {
        yield put({ type: 'setUserInfo', payload: { id: null, name: null, email: null, website: null } });
      }
      yield put(routerRedux.push(`/${type === 0 ? 'add' : 'edit'}`));
    },
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    //   return history.listen(({ pathname, query }) => {
    //     if (pathname === '/users') {
    //       dispatch({ type: 'queryUsers', payload: { page: 1 } });
    //     }
    //   });
    // },
  },
};
