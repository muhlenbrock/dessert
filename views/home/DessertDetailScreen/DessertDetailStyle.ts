import {StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export const s = StyleSheet.create({
  containerScroll: {
    backgroundColor: '#fefefe',
  },
  logo: {
    height: 200,
    flex: 1,
    width: null,
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceHeight / 2,
  },
  loaderIcon: {
    width: 60,
    height: 60,
  },
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    paddingBottom: 60,
  },
  imageContainer: {
    height: 350,
    justifyContent: 'center',
  },
  infoContainer: {
    backgroundColor: '#fefefe',
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  textName: {
    fontSize: 22,
    fontWeight: '600',
    paddingTop: 12,
  },
  textCategory: {
    fontSize: 20,
    fontWeight: '400',
    color: 'gray',
  },
  textPrice: {
    paddingTop: 6,
    fontSize: 18,
    fontWeight: '600',
  },
  textInstructions: {
    fontSize: 15,
    fontWeight: '400',
    paddingTop: 18,
  },
  bottomSheet: {
    position: 'absolute',
    backgroundColor: 'white',
    height: 90,
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  containerTextBottom: {
    flex: 1,
    justifyContent: 'center',
  },
});
