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

state = {
    title: 'Fix Rolls',
    data: [
        {
            id: 0,
            name: 'Product 1',
            price: 100,
            image: 'https://fixrolls.ru/wp-content/uploads/2019/09/Set-Love2-1-1.jpg'
        },
        {
            id: 1,
            name: 'Product 2',
            price: 200,
            image: 'https://fixrolls.ru/wp-content/uploads/2019/09/Set-Love2-1-1.jpg',
        },
        {
            id: 2,
            name: 'Product 3',
            price: 300,
            image: 'https://fixrolls.ru/wp-content/uploads/2019/09/Set-Love2-1-1.jpg',
        },
        {
            id: 4,
            name: 'Product 4',
            price: 400,
            image: 'https://fixrolls.ru/wp-content/uploads/2019/09/Set-Love2-1-1.jpg',
        },
        {
            id: 5,
            name: 'Product 5',
            price: 500,
            image: 'https://fixrolls.ru/wp-content/uploads/2019/09/Set-Love2-1-1.jpg',
        }

    ]
}


  render() {

    const {title, data} = this.state

    return (

        <View >
          < StatusBar backgroundColor='#000'/>
          < Header title={title}/>
          <ScrollView style={styles.mainScrollWrapper}>
              <View style={styles.mainWrapper}>
                  { data.map (item => (
                      <ProductItem data={item} key={item.id} />
                      )
                  )}
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
        flexShrink: 2,
        justifyContent: 'space-around',
        marginTop: 30,
        marginBottom: 50,
    },
    mainScrollWrapper: {
        backgroundColor: '#fafafa',
    },
});


// export default App;
