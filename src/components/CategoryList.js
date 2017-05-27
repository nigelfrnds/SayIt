import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import { connect } from 'react-redux';
import { categoryListFetch } from '../actions';
import CategoryItem from './CategoryItem';


class CategoryList extends Component {
  componentWillMount() {
    this.props.categoryListFetch();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.categories);
  }

  renderRow(category) {
    return <CategoryItem category={category} onPress={this.props.navigation}/>
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { categories: state.categories };
}

export default connect(mapStateToProps, {
  categoryListFetch
})(CategoryList);
