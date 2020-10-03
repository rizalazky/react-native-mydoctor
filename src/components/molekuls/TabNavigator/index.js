import React from 'react'
import { View,StyleSheet } from 'react-native';
import { Colors } from '../../../utils';
import TabItem from '../../atoms/TabItem';

function TabNavigator({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.TabNavigator}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
            <TabItem key={index} label={label} onPress={onPress} onLongPress={onLongPress} isFocused={isFocused}/>
        );
      })}
    </View>
  );
}

export default TabNavigator

const styles=StyleSheet.create({
    TabNavigator:{
        flexDirection:"row",
    }
})
