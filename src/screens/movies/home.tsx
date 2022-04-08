import React from 'react';
import { ActivityIndicator, Button, FlatList, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';
import MovieImage from '../../components/buttons/movie/movie-image';
import useMovies from '../../hooks/use-movies';
import HorizontalSlider from '../components/horizontal-slider';
import { GradientBackground } from '../components/gradient-brackground';
import { useGradientColor } from '../../context/gradient-context';
import getImageColors from '../../helpers/get-image-colors';

const Home = () => {
  const { movies, isLoading } = useMovies(['now_playing', 'popular', 'upcoming', 'top_rated']);
  const { width } = useWindowDimensions();
  const { setCurrentColors } = useGradientColor();

  const getFilmPoster = async (index: number) => {
    const currentMovie = movies[0][index];
    const [primary, secondary] = await getImageColors(currentMovie.poster_path);
    
    setCurrentColors({ primary, secondary });
  }

  React.useEffect(() => {
    if (movies?.[0]?.length)
      getFilmPoster(0);
  }, [movies]);

  if (isLoading) 
    return (
      <Container>
        <ActivityIndicator color="#f4f4f4" size={50} />
      </Container>
    );

  return (
    <GradientBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel
          data={movies[0]}
          renderItem={({ item }) => <MovieImage width={300} height={420} movie={item}/>}
          itemWidth={300}
          sliderWidth={width}
          onSnapToItem={getFilmPoster}
        />
        <HorizontalSlider title="On Cinema" movies={movies[0]} />
        <HorizontalSlider title="Popular" movies={movies[1]} />
        <HorizontalSlider title="Upconming" movies={movies[2]} />
        <HorizontalSlider title="Top rated" movies={movies[3]} />
      </ScrollView>
    </GradientBackground>
  );
};

export default Home;

const Container = styled.View`
  height: 450px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  /* background: red; */
`;
