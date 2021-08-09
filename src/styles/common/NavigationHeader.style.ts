import styled from 'styled-components/native';
import SharedCSS from '../SharedCSS';

const TitleContainer = styled.View`
    paddingTop: 0px;
    ${SharedCSS.flexJustifyCenter}
    ${SharedCSS.flexAlignCenter}
`;

const TitleText = styled.Text`
    fontSize: 18px;
    fontWeight: 800;
    color: ${({ theme }) => theme.COLORS.TEXT_WITH_BG};
`;

/** Header按鈕 */
const Button = styled.TouchableOpacity`
    padding: 12px;
`;

/** Header裡的圖示 */
const Icon = styled.Image`
    width: 16px;
    height: 16px;
`;

/** Header左邊空間容器 */
const LeftContainer = styled.View`
    ${SharedCSS.flexRow}
    ${SharedCSS.flexAlignCenter}
    paddingLeft: 4px;
`;

/** Header右邊空間容器 */
const RightContainer = styled.View`
    ${SharedCSS.flexRow}
    ${SharedCSS.flexAlignCenter}
    paddingRight: 4px;
`;

export default {
    TitleContainer,
    TitleText,
    Button,
    Icon,
    LeftContainer,
    RightContainer,
};

