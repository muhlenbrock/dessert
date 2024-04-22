import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {s} from './ModalDessertStyle';
import ButtonPrimary from '../ButtonPrimary';
import Modal from 'react-native-modal';

type ModalDessertProps = {
  isVisibleModal: boolean;
  dessert: object;
  ingredients: string[];
  measures: string[];
  onPressConfirm: () => void;
  onPressClose: () => void;
};
const isDisabledForm = (name: string, lastName: string, address: string) => {
  return name.length === 0 || lastName.length === 0 || address.length === 0;
};

function ModalDessert({
  isVisibleModal,
  dessert,
  ingredients,
  measures,
  onPressConfirm,
  onPressClose,
}: ModalDessertProps) {
  const [stepsForm, setStepsForm] = useState(0);
  const [name, onChangeName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [address, onChangeAddress] = useState('');

  return (
    <View>
      <Modal isVisible={isVisibleModal} avoidKeyboard style={s.modalContainer}>
        <View style={s.viewContainer}>
          {stepsForm === 0 && (
            <View style={{flex: 1}}>
              {dessert?.meals[0]?.strMealThumb && (
                <View style={s.imageContainerModal}>
                  <Image
                    style={s.logo}
                    source={{
                      uri: dessert?.meals[0]?.strMealThumb,
                    }}
                  />
                </View>
              )}
              <View style={{flex: 1}}>
                <ScrollView style={{paddingHorizontal: 18}}>
                  <Text style={s.textName}>Ingredients</Text>
                  <View style={{paddingTop: 18}}>
                    {ingredients.map((ingredient, index) => (
                      <View key={index}>
                        {ingredient?.length > 0 && (
                          <View style={{paddingBottom: 5}}>
                            <Text>
                              {measures[index]} {ingredient}
                            </Text>
                          </View>
                        )}
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </View>
              <View style={{paddingVertical: 18}}>
                <ButtonPrimary
                  label={'Next'}
                  onPress={() => {
                    setStepsForm(1);
                  }}
                />
              </View>
            </View>
          )}
          {stepsForm === 1 && (
            <View style={{padding: 18, flex: 1}}>
              <View style={{flex: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                  }}>
                  <Text style={[s.textName, {flex: 1}]}>
                    Personal information
                  </Text>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'flex-end',
                    }}
                    onPress={() => {
                      setStepsForm(0);
                      onChangeName('');
                      onChangeLastName('');
                      onChangeAddress('');
                      onPressClose();
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 24,
                        fontWeight: '600',
                      }}>
                      X
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={s.viewInput}>
                  <TextInput
                    style={s.input}
                    onChangeText={onChangeName}
                    value={name}
                    placeholder="Name"
                    placeholderTextColor="#c0bfbe"
                  />
                </View>
                <View style={s.viewInput}>
                  <TextInput
                    style={s.input}
                    onChangeText={onChangeLastName}
                    value={lastName}
                    placeholder="Last Name"
                    placeholderTextColor="#c0bfbe"
                  />
                </View>
                <View style={s.viewInput}>
                  <TextInput
                    style={s.input}
                    onChangeText={onChangeAddress}
                    value={address}
                    placeholder="Address"
                    placeholderTextColor="#c0bfbe"
                  />
                </View>
              </View>
              <View>
                <ButtonPrimary
                  label={'Confirm'}
                  onPress={() => {
                    if (!isDisabledForm(name, lastName, address)) {
                      setStepsForm(0);
                      onChangeName('');
                      onChangeLastName('');
                      onChangeAddress('');
                      onPressConfirm();
                    }
                  }}
                  disabled={isDisabledForm(name, lastName, address)}
                />
              </View>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
}

export {ModalDessert};
