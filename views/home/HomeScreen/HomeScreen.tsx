import {View, FlatList} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDessertsAction} from '../../../redux/dessert/slice';
import {StateType} from '../../../redux/root-reducer';
import CardDessert from '../../../components';

class HomeScreen extends Component<any> {
  componentDidMount(): void {
    const {getDessertsAction} = this.props;
    getDessertsAction();
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'pink'}}>
        <FlatList
          data={this.props.desserts?.meals}
          renderItem={({item, index, separators}) => {
            return <CardDessert idMeal={item.idMeal} uri={item.strMealThumb} />;
          }}
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
