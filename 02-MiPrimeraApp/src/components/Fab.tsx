import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Platform
} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, position = 'br', onPress}: Props) => {
    const ios = () => {
        return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.fabLocation,
                position === 'br' ? styles.right : styles.left,
              ]}
              onPress={onPress}>
              <View style={styles.fab}>
                <Text style={styles.fabText}>{title}</Text>
              </View>
            </TouchableOpacity>
            );
    }

    const android = () => {
        return (
            <View
              style={[
                styles.fabLocation,
                position === 'br' ? styles.right : styles.left,
              ]}>
              <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple("#28425B", false, 25)}>
                <View style={styles.fab}>
                  <Text style={styles.fabText}>{title}</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          );
    }

    return Platform.OS === 'ios' ? ios() : android();
  
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  left: {
    left: 25,
  },
  right: {
    right: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    elevation: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
