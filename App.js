import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
    View,
} from 'react-native';



import Header from "./src/Components/header";
import ProductItem from "./src/Components/productCard";

export default class App extends Component {
// const App: () => React$Node = () => {

state ={
    title: 'Fix Rolls',
    data: {

    },
}


  render() {

    return (
        <View >
          < StatusBar backgroundColor='#000'/>
          < Header title={this.state.title}/>
          <ScrollView style={styles.mainScrollWrapper}>
              <View style={styles.mainWrapper}>
            <ProductItem />
              <ProductItem />
              <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
          </View>
          </ScrollView>
        </View>
    );
  };
}

const styles = StyleSheet.create({
    mainWrapper: {
    flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    mainScrollWrapper: {

    },
});


// export default App;
