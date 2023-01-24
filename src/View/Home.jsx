import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import axios from "axios";
import Card from '../component/Card';
import Styles from '../styles/CardStyles';
import Loading from '../component/Loading';
const Home = () => {

    const [poke, setPoke] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50`);

      let urls = [];
      data.results?.map((p) => urls.push(p.url));

      Promise.all(urls)
        .then((res) => {
          res.map((e) => {
            axios
              .get(e)
              .then((p) => {
                const pokemon = {
                  id: p.data.id,
                  name: p.data.name,
                  hp: p.data.stats[0].base_stat,
                  attack: p.data.stats[1].base_stat,
                  defense: p.data.stats[2].base_stat,
                  speed: p.data.stats[5].base_stat,
                  height: p.data.height,
                  weight: p.data.weight,
                  image: p.data.sprites.front_default,
                  types: p.data.types.map((t) => t.type.name),
                };
                setPoke(prev => [...prev, pokemon])
              })
              .catch((err) => console.log(err));
          });
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      {
        poke.length === 0 ? (
          <Loading/>
        ) : (
          <FlatList
            data={poke}
            numColumns={2}
            columnWrapperStyle={Styles.row}
            keyExtractor={item => item.id}
            renderItem={ ({item}) => (
              <Card
                item={item}
              />
            )}
          />
        )
      }
    </SafeAreaView>
  )
}

export default Home