
import { View, ActivityIndicator, Text } from 'react-native';
import { IconSvg } from '@/assets/images/svg';
import SvgIcon from './SvgIcon';

const ScreenLoader = () => {
  return (
    <View className="flex-1 justify-center items-center bg-primary p-5">
      <SvgIcon xml={IconSvg.logo_lafise} width={80} height={80} className="mb-5" />
      <ActivityIndicator size="large" color="#ffff" />
      <Text className="mt-4 text-lg text-white">Cargando servicios...</Text>
    </View>
  );
};

export default ScreenLoader;
