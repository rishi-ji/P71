import React from 'react';
import { StyleSheet} from 'react-native';
import ReadStory from "./screens/ReadStory"
import WriteStory from "./screens/WriteStory"
import { createAppContainer } from "react-navigation"
import { createBottomTabNavigator } from "react-navigation-tabs"

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  ReadStory: { screen: ReadStory },
  WriteStory: { screen: WriteStory }
})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
