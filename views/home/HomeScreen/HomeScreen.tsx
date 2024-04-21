import {View, FlatList} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDessertsAction} from '../../../redux/dessert/slice';
import {StateType} from '../../../redux/root-reducer';
import CardDessert from '../../../components';
import {s} from './HomeStyle';

type ItemData = {
  idMeal: number;
  strMealThumb: string;
  strMeal: string;
};
class HomeScreen extends Component<any> {
  componentDidMount(): void {
    const {getDessertsAction} = this.props;
    getDessertsAction();
  }

  renderItem = ({item}: {item: ItemData}) => {
    return (
      <View style={s.containerCard}>
        <CardDessert
          idMeal={item.idMeal}
          uri={item.strMealThumb}
          title={item.strMeal}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.props.desserts?.meals}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: StateType) => ({
  desserts: state.desserts?.dessertList?.data,
});
const mapDispatchToProps = {
  getDessertsAction,
};
const connectHomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
export {connectHomeScreen as HomeScreen};
