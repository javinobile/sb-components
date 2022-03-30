import './mylabel.css';
import { Allcaps } from '../stories/components/MyLabel.stories';

export interface Props {
    /**
 * Texto de la etiqueta
 */
    label: string,
    /**
 * Estilo y tamaño de la etiqueta
 */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
 * El color de la etiqueta
 */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
* El color de Fuente (libre)
*/
    fontColor?: string;
    /**
* Define si la etiqueta tiene las letras en mayúsculas o no
*/
    allCaps?: boolean;
}

/**
 * Primary UI label for the project
 */
export const MyLabel = ({ label = 'No Label', size = 'normal', allCaps, color, fontColor }: Props) => {
    return (
        <span className={`label ${size} ${fontColor != "" && 'text-' + color}`} style={{color: fontColor }}>{allCaps ? label.toUpperCase() : label}</span>
    )
}

export default MyLabel
