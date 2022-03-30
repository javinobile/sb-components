/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
 * Texto de la etiqueta
 */
    label: string;
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: Props) => JSX.Element;
