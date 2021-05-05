import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Image } from 'react-native'
import { categories } from '../../data/dataArrays';



export default class CategoriesScreen extends React.Component {
  static navigationOptions = {
    title: 'Categories'
  };

  constructor(props) {
    super(props);
  }

  onPressCategory = item => {
    const title = item.name;
    const category = item;
    this.props.navigation.navigate('RecipesList', { category, title });
  };

  renderCategory = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressCategory(item)}>
      <View style={styles.container}>
        <Image style={{
            borderRadius: 20,
            height: 200,
            width: 300
          }} source={item.image} />
        <Text style={{
            flex: 1,
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#333333',
            padding: 10,
        }
        }>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          data={categories}
          renderItem={this.renderCategory}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 3,
        alignItems: "center",
        textAlign: "center"
    }
  });
