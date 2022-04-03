import React from 'react'; 
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/core'
import { Movie } from '../../../types/movie-types';

interface Props {
  movie: Movie;
  width: number;
  height: number;
}

const MovieImage: React.FC<Props> = ({ movie, width, height }) => {
  const { navigate } = useNavigation()

  return (
    <Container {...{ width, height } }>
      <StyledTouchableOpacity activeOpacity={0.8} onPress={() => navigate('Details', { movie })}>
        <Image source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          }}
        />
      </StyledTouchableOpacity>
    </Container>
  )
}

export default MovieImage;

const Container = styled.View<{ width: number; height: number; }>`
  ${({ width, height }) => `
    width: ${width}px;
    height: ${height}px;
  `};
  margin: 0 8px;
  /* background: red; */
`;

const Image = styled.Image`
  border-radius: 16px;
  flex: 1;
  
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
`;
