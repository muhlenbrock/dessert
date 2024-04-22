import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDessertByIdAction} from '../../../redux/dessert/slice';
import {StateType} from '../../../redux/root-reducer';
import {getDataObj} from '../../../utils';

class OrdersScreen extends Component<any> {
  async componentDidMount(): void {
    console.log(await getDataObj());
  }
  render() {
    const {dessert} = this.props;
    return (
      <View style={{flex: 1}}>
        <Text>Orders</Text>
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
