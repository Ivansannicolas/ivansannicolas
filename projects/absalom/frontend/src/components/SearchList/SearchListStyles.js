import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  characterList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: '5%',
    marginBottom: '5%',
  },
  characterList__title: {
    width: '100%',
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title__bar: {
    width: '75%',
    height: 4,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  characterList__list: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  characterList__list__block: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  characterList__list__block__row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 5,
  },
  characterList__character__firstRow__name__block: {
    paddingRight: 10,
    borderWidth: 1,
    borderBottomColor: '#e5e5e5',
    borderTopColor: 'rgba(255,255,255,0)',
    borderRightColor: 'rgba(255,255,255,0)',
    borderLeftColor: 'rgba(255,255,255,0)',
  },
  characterList__character__firstRow__name__text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#224864',
  },
  characterList__character__firstRow__text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#224864',
  },
  characterList__character__secondRow__text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#224864',
  },
  addIcon__block: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 80,
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 99,
  },
  icon: {
    width: 45,
    height: 45,
  },
  addCharacterModal: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    height: 400,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modal__background: {
    shadowOpacity: 0.5,
  },
  addCharacterModal__block: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  addCharacterModal__title: {
    marginTop: 5,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#224864',
  },
  addCharacterModal__text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#224864',
  },
  addCharacterModal__textInput: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2089DC',
  },
  addCharacterModal__row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  addCharacterModal__input: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '50%',
    borderWidth: 1,
    borderLeftColor: 'white',
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: '#e5e5e5',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#224864',
  },
  buttonConfirmAddCharacterModal: {
    width: 200,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#3D7BA8',
    borderRadius: 10,
  },
});

export default styles;