import { SvgXml } from 'react-native-svg';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface SvgIconProps {
    xml: string; 
    width?: number | string;
    height?: number | string;
    color?: string; 
    borderColor?: string; 
    className?: string; // Clase opcional para estilos adicionales
}

const SvgIcon: React.FC<SvgIconProps> = ({ xml, width = 24, height = 24, color, borderColor, className }) => {
    const coloredXml = typeof xml === 'string' && color
        ? xml.replace(/fill=".*?"/g, `fill="${color}"`)
        : xml;

    const coloredXmlWithBorder = typeof coloredXml === 'string' && borderColor
        ? coloredXml.replace(/stroke=".*?"/g, `stroke="${borderColor}"`)
        : coloredXml;

    const containerStyle: ViewStyle = {
        width : typeof width === 'number' ? width : parseInt(width as string, 10),
        height : typeof height === 'number' ? height : parseInt(height as string, 10),
    };

    return (
        <View className={`flex items-center justify-center ${className}`} style={containerStyle}>
            <SvgXml xml={coloredXmlWithBorder} width="100%" height="100%" />
        </View>
    );
};

const styles = StyleSheet.create({
    // Define tus clases aquí
    exampleClass: {
        borderWidth: 1,
        borderColor: 'red',
    },
});

export default SvgIcon;