import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useAuth } from '../../context/auth-context';

const IconTouchable = ({ name }: { name: string; }) => {
  const { onChangeFavIcon } = useAuth()

  return (
    <TouchableOpacity onPress={() => onChangeFavIcon(name)}>
      <Icon name={name} size={50} color="#c52e2e" />
    </TouchableOpacity>
  )
}

export default IconTouchable;
