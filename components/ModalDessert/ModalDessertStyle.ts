import {StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export const s = StyleSheet.create({
  modalContainer: {
    marginHorizontal: 12,
  },
  viewContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    overflow: 'hidden',
    minHeight: 500,
  },
  logo: {
    height: 200,
    flex: 1,
    width: null,
  },
  textName: {
    fontSize: 22,
    fontWeight: '600',
    paddingTop: 12,
  },
  imageContainerModal: {
    height: 200,
    justifyContent: 'center',
  },
  input: {
    height: 50,
  },
  viewInput: {
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 12,
    borderColor: '#C0BFBE',
    marginTop: 18,
  },
});
