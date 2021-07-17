import styled from 'styled-components/native';

/** 自訂大小的同寬高圖片 */
const Square = styled.Image<{ size: number, rotate?: number }>`
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
    ${(props) => props.rotate ? `transform: rotate(${props.rotate}deg)` : undefined};
`;

export default {
    Square,
};