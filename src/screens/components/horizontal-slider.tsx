import React from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import ImageColors from 'react-native-image-colors';
import Carousel from 'react-native-snap-carousel';
import styled from 'styled-components/native';
import MovieImage from '../../components/buttons/movie/movie-image';
import { useGradientColor } from '../../context/gradient-context';
import getImageColors from '../../helpers/get-image-colors';
import { Movie } from '../../types/movie-types';

interface Props {
  title?: string;
  movies: Movie[];
  size?: 'small' | 'large'
}

const HorizontaSlider: React.FC<Props> = ({ title, movies, size = 'small'}) => {
  const { width } = useWindowDimensions();
  return (
    <Container props={{ size }}>
      {title && <Title>{title}</Title>}
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieImage width={120} height={168} movie={item}/>}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          width,
        }}
      />
    </Container>
  )
}

export default HorizontaSlider;

const Title = styled.Text`
  font-size: 25px;
  align-self: flex-start;
`;

const Container = styled.View<{ props: Pick<Props, 'size'> }>`
  height: ${({ props: { size } }) => size === 'large' ?  450 : 250}px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  /* background: red; */
`;

