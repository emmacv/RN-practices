import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { RootStackParams } from '../../navigation/movies-navigation';
import MovieImage from '../../components/buttons/movie/movie-image';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import movieDB from '../api/movies-db';
import currencyFormatter from 'currency-formatter';
import ActorCard from './actor-card';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

type Props = StackScreenProps<RootStackParams, 'Details'>;

const { width, height } = Dimensions.get('window');

const Details: React.FC<Props> = ({ route, navigation }) => {
  const { movie } = route.params;
  const [movieDetails, setMovieDetails] = React.useState<any>({});
  const [movieCredits, setMovieCredits] = React.useState<any>();

  React.useEffect(() => {
    movieDB.get(`/${movie.id}`).then(resp => setMovieDetails(resp.data));
    movieDB.get(`/${movie.id}/credits`).then(resp => setMovieCredits(resp.data));
  }, []);

  return (
    <Container showsVerticalScrollIndicator={false}>
      <View style={{ position: 'absolute', top: 10, zIndex: 999, left: 10 }}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" size={50} />
        </TouchableOpacity>
      </View>
      <SubContainer>
        <ImageContainer width={width} height={height}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              }}
            />
        </ImageContainer>
      </SubContainer>
      <TitleContainer>
        <MainTitle>{movie.original_title}</MainTitle>
        <Title>{movie.title}</Title>

        <MovieDetalsContainer>
          <MovieReleaseDateContainer>
            <Icon name="star-outline" size={20}/>
            <Text>Release date: {movieDetails?.release_date}</Text>
          </MovieReleaseDateContainer>
          <Text>Genres: {movieDetails?.genres?.map?.(item => item.name)?.join(', ')} </Text>
          <Overview>
            <Overviewtext>
              {movieDetails?.overview}
            </Overviewtext>
            <Text>Presupuesto</Text>
            <Text>{currencyFormatter.format(movieDetails?.budget, { code: 'USD' })}</Text>
          </Overview>
        </MovieDetalsContainer>
        <CastContainer>
          <Text>Actores</Text>
          <StyledFlatList
            keyExtractor={item => `${item.id}`}
            data={movieCredits?.cast?.slice(0, 20) || []}
            renderItem={({ item: actor }) => (
              <ActorCard actor={actor || {}}/>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </CastContainer>
      </TitleContainer>
    </Container>
  );
};

export default Details;

const CastContainer = styled.View`
  margin: 45px 0;
`;

const Overviewtext = styled.Text`
  font-size: 18px;
`;

const Container = styled.ScrollView`
`;

const TitleContainer = styled.View`
`;

const Overview = styled.View`
  
`;

const MainTitle = styled.Text`
  font-size: 18px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
`

const SubContainer = styled.View`
  height: 600px;
  width: 100%;
`;

const ImageContainer = styled.View<{ width: number; height: number; }>`
  ${({ width, height }) => `
    height: ${height}px;
  `};
  flex: 1;
`;

const Image = styled.Image`
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  flex: 1;
`;

const MovieReleaseDateContainer = styled.View`
  flex-direction: row;
  width: 80px;
  min-width: 200px;
  justify-content: space-between;
`;

const MovieDetalsContainer = styled.View`

`;

const StyledFlatList = styled.FlatList`
  /* background: red; */
  /* padding: 16px 0; */
  height: 80px;
`;
