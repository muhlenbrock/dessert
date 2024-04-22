import {Text, View, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDessertByIdAction} from '../../../redux/dessert/slice';
import {StateType} from '../../../redux/root-reducer';
import YoutubePlayer from 'react-native-youtube-iframe';
import {s} from './DessertDetailStyle';
import LoaderKit from 'react-native-loader-kit';
import {ButtonPrimary} from '../../../components';
import {ModalDessert} from '../../../components';

import {getIngredients, getMeasures} from '../../../utils';
type State = {
  showYoutubePlayer: boolean;
  isVisibleModal: boolean;
  stepsForm: number;
  ingredients: string[];
  measures: string[];
};

class DessertDetailScreen extends Component<any, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showYoutubePlayer: false,
      isVisibleModal: false,
      stepsForm: 0,
      ingredients: [],
      measures: [],
    };
  }
  componentDidMount(): void {
    const {getDessertByIdAction, route} = this.props;
    const {idMeal} = route.params;
    getDessertByIdAction({id: idMeal});
  }

  render() {
    const {dessert, isLoading} = this.props;
    const {showYoutubePlayer, isVisibleModal, ingredients, measures} =
      this.state;
    return (
      <>
        <ScrollView style={s.containerScroll}>
          {isLoading && (
            <View style={s.loader}>
              <LoaderKit
                style={s.loaderIcon}
                name={'BallClipRotate'}
                color={'gray'}
              />
            </View>
          )}
          {!isLoading && (
            <View style={s.container}>
              {dessert?.meals[0]?.strMealThumb && (
                <View style={s.imageContainer}>
                  <Image
                    style={s.logo}
                    source={{
                      uri: dessert?.meals[0]?.strMealThumb,
                    }}
                  />
                </View>
              )}
              <View style={s.infoContainer}>
                <Text style={s.textCategory}>
                  {dessert?.meals[0]?.strCategory}
                </Text>
                <Text style={s.textName}>{dessert?.meals[0]?.strMeal}</Text>
                <Text style={s.textPrice}>${dessert?.meals[0]?.idMeal}</Text>
                <Text style={s.textInstructions}>
                  {dessert?.meals[0]?.strInstructions}
                </Text>
                <View>
                  {showYoutubePlayer && <Text style={s.textName}>Video</Text>}
                  <YoutubePlayer
                    height={showYoutubePlayer ? 200 : 0}
                    videoId={dessert?.meals[0]?.strYoutube?.split('v=')[1]}
                    onReady={() => {
                      this.setState({showYoutubePlayer: true});
                    }}
                    onError={() => {
                      this.setState({showYoutubePlayer: false});
                    }}
                  />
                </View>
              </View>
            </View>
          )}
        </ScrollView>
        <View style={s.bottomSheet}>
          <View style={s.containerTextBottom}>
            <Text style={s.textPrice}>${dessert?.meals[0]?.idMeal}</Text>
          </View>
          <View>
            <ButtonPrimary
              label={'Buy'}
              onPress={() => {
                this.setState({
                  isVisibleModal: true,
                  ingredients: getIngredients(dessert?.meals[0]),
                  measures: getMeasures(dessert?.meals[0]),
                });
              }}
            />
          </View>
        </View>
        <ModalDessert
          isVisibleModal={isVisibleModal}
          dessert={dessert}
          ingredients={ingredients}
          measures={measures}
          onPressConfirm={() => {
            this.setState({
              isVisibleModal: false,
            });
          }}
          onPressClose={() => {
            this.setState({
              isVisibleModal: false,
            });
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state: StateType) => ({
  dessert: state.desserts?.dessert?.data,
  isLoading: state.desserts?.dessert?.isLoading,
});
const mapDispatchToProps = {
  getDessertByIdAction,
};
const connectDessertDetailScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DessertDetailScreen);
export {connectDessertDetailScreen as DessertDetailScreen};
