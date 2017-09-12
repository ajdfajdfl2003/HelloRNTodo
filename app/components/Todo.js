import React, { Component } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, toggleTodo, removeTodo } from '../actions/todo.js';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      todos: this.props.todos,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.todos !== nextProps.todos) {
      this.setState({
        todos: nextProps.todos
      })
    }
  }

  createTodo = () => {
    let { todos } = this.state;
    this.props.addTodo({
      id: this.getNextId(),
      content: this.state.value,
      checked: false,
    })
    this.setState({
      value: null,
    });
  }

  handleToggle = (toggleTodo) => {
    this.props.toggleTodo(toggleTodo);
  }

  handleRemove = (id) => {
    this.props.removeTodo(id);
  }

  getNextId = () => (this.props.todos.length ?
    this.props.todos.reduce((max, obj) => Math.max(max, obj.id), this.props.todos[0].id) + 1 : 1);

  showTodoList = () => {
    return this.state.todos.map((todo, index) => {
      return (
        <View key={`todo_${index}`} style={{flexDirection: 'row', padding: 10,}}>
          <Button title="完成" onPress={() => this.handleToggle(todo)} />
          <Button title="刪除" color="red" onPress={() => this.handleRemove(todo.id)} />
          <Text style={{textDecorationLine: (todo.checked ? 'line-through' : 'none')}}>{todo.content}</Text>
        </View>
      );
    })
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          style={{width: '80%', borderBottomWidth: 1, borderBottomColor: '#aaaaaa'}}
          placeholder="輸入待做事項..."
          value={this.state.value}
          onChangeText={(value) => this.setState({value})}
        />
        <Button title="送出" onPress={() => this.createTodo()} color="#c40000" />
        {/* todo list */}
        <View style={{ width: '100%', borderTopWidth: 2 }}>
          {this.showTodoList()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTodo,
    toggleTodo,
    removeTodo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
