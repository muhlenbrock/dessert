import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDessertByIdAction} from '../../../redux/dessert/slice';
import {StateType} from '../../../redux/root-reducer';

class OrdersScreen extends Component<any> {
  componentDidMount(): void {}
  render() {
    const {dessert} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text>{dessert?.meals[0]?.strMeal}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state: StateType) => ({
  dessert: state.desserts?.dessert?.data,
});
const mapDispatchToProps = {
  getDessertByIdAction,
};
const connectDessertDetailScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrdersScreen);
export {connectDessertDetailScreen as OrdersScreen};
