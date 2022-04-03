import ImageColors from "react-native-image-colors";

const getImageColors = async (url: string) => {
  let result = null;

  const colors = await ImageColors.getColors(`https://image.tmdb.org/t/p/w500${url}`, {
    fallback: '#fff',
  });

  if (colors.platform === 'android') {
    result = [
      colors.dominant,
      colors.average,
      colors.vibrant,
    ];
  }
  return result;
};

export default getImageColors;

