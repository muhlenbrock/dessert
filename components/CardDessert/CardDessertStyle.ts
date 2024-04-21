import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
  card: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingBottom: 20,
    flex: 1,
  },
  logo: {
    height: 320,
    flex: 1,
    width: null,
  },
  titleCard: {
    paddingTop: 15,
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  priceCard: {
    paddingTop: 15,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  fakeButton: {
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#ffcc62',
    width: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    textAlignVertical: 'top',
    paddingVertical: 17,
  },
});
