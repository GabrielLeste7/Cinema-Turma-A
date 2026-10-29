import { StatusBar, StyleSheet, View } from 'react-native';
import CategoryButton from './components/CategoryButton';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Header />
      <SearchBar />

      <View style={styles.containerCategory}>

        <CategoryButton title="Todos" selected={true} />
        <CategoryButton title="Ação" selected={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080D14',
    paddingTop: 40,
  },
  containerCategory: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 20,
    marginTop: 15
  },
});
