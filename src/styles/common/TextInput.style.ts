import styled from 'styled-components/native';
import SharedCSS from '../SharedCSS';

// interface TextInputProps {
//     fullWidth?: boolean;
//     fullHeight?: boolean;
//     width?: number;
//     height?: number;
//     paddingHorizontal?: number;
//     paddingVertical?: number;
//     borderRadius?: number;
// }

/** 自訂樣式輸入框 */
// const Custom = styled.TextInput<TextInputProps>`
//     ${(props) => props.fullWidth ? SharedCSS.w100 : undefined}
//     ${(props) => props.fullHeight ? SharedCSS.h100 : undefined}
//     ${(props) => props.width ? `width:${props.width}px` : undefined}
//     ${(props) => props.height ? `height:${props.height}px` : undefined}
//     ${(props) => props.paddingHorizontal ? `paddingHorizontal:${props.paddingHorizontal}px` : undefined}
//     ${(props) => props.paddingVertical ? `paddingVertical:${props.paddingVertical}px` : undefined}
//     ${(props) => props.borderRadius ? `borderRadius:${props.borderRadius}px` : undefined}
// `;

/** 訊息輸入框 */
const Message = styled.TextInput`
    backgroundColor: ${({ theme }) => theme.COLORS.TEXTINPUT_BG};
    ${SharedCSS.w100}
    minHeight: 64px;
    padding: 10px;
    borderRadius: 6px;
`;

export default {
    Message
};