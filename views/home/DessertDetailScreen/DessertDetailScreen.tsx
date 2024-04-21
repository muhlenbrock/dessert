import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDessertByIdAction} from '../../../redux/dessert/slice';
import {StateType} from '../../../redux/root-reducer';
import YoutubePlayer from 'react-native-youtube-iframe';
import {s} from './DessertDetailStyle';
import LoaderKit from 'react-native-loader-kit';
import {ButtonPrimary} from '../../../components';

class DessertDetailScreen extends Component<any> {
  constructor(props) {
    super(props);
    this.state = {
      showYoutubePlayer: false,
    };
  }
  componentDidMount(): void {
    const {getDessertByIdAction, route} = this.props;
    const {idMeal} = route.params;
    getDessertByIdAction({id: idMeal});
  }
  render() {
    const {dessert, isLoading} = this.props;
    const {showYoutubePlayer} = this.state;
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
              <View style={s.imageContainer}>
                <Image
                  style={s.logo}
                  source={{
                    uri: dessert?.meals[0]?.strMealThumb,
                  }}
                />
              </View>
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
            <ButtonPrimary label={'Comprar'} onPress={() => {}} />
          </View>
        </View>
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
