
// /* eslint-disable */
import React from 'react';
import { connect } from 'dva';
import { Button, List, InputItem, View, Flex, Text, WhiteSpace, Icon, HttpUtils, WingBlank, NavBar,
  SearchBar, ListView, Modal, ActivityIndicator, RefreshControl, ActionSheet, SwipeAction } from 'snk-mobile-test';
import { createForm } from 'rc-form';

class UsersPage extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => {
        return r1 !== r2;
      },
    });
    this.state = {
      dataSource: ds.cloneWithRows([]),
      refreshing: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.users.list);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.users.list),
    });
  }

  _renderRow = (row) => {
    // console.log(row);
    return (<SwipeAction
      autoClose
      right={[
        {
          text: '编辑',
          onPress: () => this._editHandler(row),
          style: { backgroundColor: '#ddd', color: 'white' },
        },
        {
          text: '删除',
          onPress: () => this._deleteHandler(row.id),
          style: { backgroundColor: '#F4333C', color: 'white' },
        },
      ]}
    >
      <List.Item key={row.id} >
        <Text>{row.name}</Text>
        <List.Item.Brief style={{ width: '100%' }}>
          <Text style={{ marginRight: 15 }}>{row.email}</Text>
          <Text>{row.website}</Text>
        </List.Item.Brief>
      </List.Item>
    </SwipeAction>);
    // return <List.Item key={row.id} ><Text>{row.name}</Text></List.Item>;
  };

  _add = () => {
    this.props.dispatch({
      type: 'users/toUserBasicInfo',
      payload: { type: 0 },
    });
    // Modal.prompt('添加Users', '', [
    //   { text: '取消' },
    //   { text: '添加',
    //     onPress: value => this.props.dispatch({ type: 'users/save',
    //     payload: { usersList: { value } } }) },
    // ], 'plain-text');
  }

  _onScroll = (e) => {
    this.st = e.scroller.getValues().top;
    this.domScroller = e;
  };

  _onRefresh = () => {
    console.log('onRefresh');
    this.setState({ refreshing: true });
    if (!this.manuallyRefresh) {
      this.props.dispatch({ type: 'users/queryUsers', payload: { page: 1 } });
    } else {
      this.manuallyRefresh = false;
    }
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 600);
  };
  _deleteHandler = (id) => {
    // console.log(id);
    this.props.dispatch({
      type: 'users/remove',
      payload: id,
    });
  }
  _editHandler = (row) => {
    const { name, email, website, id } = row;
    this.props.dispatch({
      type: 'users/toUserBasicInfo',
      payload: { type: 1 },
    });
    this.props.dispatch({
      type: 'users/setUserInfo',
      payload: { name, email, website, id },
    });
  }
  _onEndReached = () => {
    console.log('reach end');
    const { page, hasMore, refreshing } = this.props.users;
    console.log(page);
    if (hasMore && !refreshing) {
      this.props.dispatch({ type: 'users/queryUsers', payload: { page: page + 1 } });
    }
  }
  render() {
    const { loading } = this.props;
    return (
      <Flex direction="column" style={{ backgroundColor: 'white', height: '100%' }}>
        <Flex.Item style={{ width: '100%', flex: 0 }} >
          <NavBar rightContent={<Text onClick={this._add} >添加</Text>} >用户列表</NavBar>
          <SearchBar placeholder="搜索" maxLength={8} />
        </Flex.Item>
        <Flex.Item style={{ width: '100%', display: 'flex', marginLeft: 0 }} >
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            enableEmptySections
            // style={{ overflow: 'auto', display: 'flex' }}
            // contentContainerStyle={{ height: '100%' }}
            // style={{ height: document.documentElement.clientHeight - 89 }}
            // renderBodyComponent={() => <MyBody />}
            onEndReachedThreshold={10}
            // initialListSize={(document.documentElement.clientHeight - 89) / 45}
            refreshControl={<RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
              // icon={this._renderCustomIcon()}
            />}
            onScroll={this._onScroll}
            onEndReached={this._onEndReached}
          />
        </Flex.Item>
        <ActivityIndicator animating={loading || false} toast text="正在加载" />
      </Flex>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  return {
    users,
    loading: state.loading.models.users,
  };
}

export default connect(mapStateToProps)(createForm({
  onFieldsChange(props, fields) {
    props.dispatch({
      type: 'users/save',
      payload: fields,
    });
  } })(UsersPage));
