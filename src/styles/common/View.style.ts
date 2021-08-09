import styled, { DefaultTheme } from 'styled-components/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import SharedCSS from '../SharedCSS';
import LinearGradient from 'react-native-linear-gradient';

/** View styled-components 外部參數類型 */
interface ViewProps {
    fullPage?: boolean; // 自動填滿
    fullWidth?: boolean;
    fullHeight?: boolean;
    width?: number;
    height?: number;
    justifyContent?: string;
    alignItems?: string;
    flexWrap?: string;
    paddingHorizontal?: number;
    paddingVertical?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    bgType?: number;
    borderRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    borderColor?: string;
    backgroundColor?: string;
}

interface ViewBGProps {
    bgType?: number;
}

/** 自訂義View */
const Custom = styled.View<ViewProps>`
    ${(props) => props.fullPage ? SharedCSS.fullPage : undefined}
    ${(props) => props.fullWidth ? SharedCSS.w100 : undefined}
    ${(props) => props.fullHeight ? SharedCSS.h100 : undefined}
    ${(props) => props.width ? `width:${props.width}px` : undefined}
    ${(props) => props.height ? `height:${props.height}px` : undefined}
    justifyContent: ${(props): string => props.justifyContent || 'center'}
    alignItems: ${(props): string => props.alignItems || 'center'}
    ${(props) => props.flexWrap ? `flexWrap: ${props.flexWrap}` : undefined}
    ${(props) => props.paddingHorizontal ? `paddingHorizontal:${props.paddingHorizontal}px` : undefined}
    ${(props) => props.paddingVertical ? `paddingVertical:${props.paddingVertical}px` : undefined}
    ${(props) => props.paddingTop ? `paddingTop:${props.paddingTop}px` : undefined}
    ${(props) => props.paddingBottom ? `paddingBottom:${props.paddingBottom}px` : undefined}
    ${(props) => props.paddingLeft ? `paddingLeft:${props.paddingLeft}px` : undefined}
    ${(props) => props.paddingRight ? `paddingRight:${props.paddingRight}px` : undefined}
    ${(props) => props.bgType ? `backgroundColor: ${bgTypeToColor(props.theme, props.bgType)}` : undefined};
    ${(props) => props.borderRadius ? `borderRadius: ${props.borderRadius}px` : undefined};
    ${(props) => props.borderTopLeftRadius ? `borderTopLeftRadius: ${props.borderTopLeftRadius}px` : undefined};
    ${(props) => props.borderTopRightRadius ? `borderTopRightRadius: ${props.borderTopRightRadius}px` : undefined};
    ${(props) => props.borderBottomLeftRadius ? `borderBottomLeftRadius: ${props.borderBottomLeftRadius}px` : undefined};
    ${(props) => props.borderBottomRightRadius ? `borderBottomRightRadius: ${props.borderBottomRightRadius}px` : undefined};
    ${(props) => props.borderColor ? `borderColor: ${props.borderColor}` : undefined};
    ${(props) => props.backgroundColor ? `backgroundColor: ${props.backgroundColor}` : undefined};
`;

const Center = styled(Custom)`
    ${SharedCSS.flexJustifyCenter}
    ${SharedCSS.flexAlignCenter}
`;

/** 純橫向排列 */
const Row = styled(Custom)`
    ${SharedCSS.flexRow}
`;

/** 純直向排列 */
const Column = styled(Custom)`
    ${SharedCSS.flexColumn}
`;

/** 透明滿版 */
const TransparentFull = styled.View`
    ${SharedCSS.fullPage}
`;

/** 背景色依照號碼參數改變 */
const bgTypeToColor = (theme: DefaultTheme, bgType?: number) => {
    switch (bgType) {
        case 2: return theme.COLORS.SCENE_BG_2;
        default: return theme.COLORS.SCENE_BG;
    }
}

/** 每頁共用可滑動容器 */
const SceneScrollContainer = styled.ScrollView<ViewBGProps>`
    backgroundColor: ${(props) => bgTypeToColor(props.theme, props.bgType)};
`;

/** 每頁共用可用一般容器 */
const SceneContainer = styled.View<ViewBGProps>`
    ${SharedCSS.fullPage}
    backgroundColor: ${(props) => bgTypeToColor(props.theme, props.bgType)};
`;

/** 使頁面不受status bar影響 */
const SafeArea = styled(SafeAreaView)`
    ${SharedCSS.fullPage}
`;

const FilledColumn = styled.View`
    flex: 1;
`;

const FilledRow = styled.View`
    flex: 1;
    ${SharedCSS.flexRow}
`;

/** 泛用Webview容器 */
const WebViewContainer = styled.View`
    ${SharedCSS.stretchMask}
`;

/** 正方形容器 */
const SquareContainer = styled.View<{ size: number, bg?: string }>`
    width: ${(props) => `${props.size}px` };
    height: ${(props) => `${props.size}px` };
    overflow: hidden;
    ${(props) => props.bg ? `backgroundColor:${props.bg}` : undefined};
`;

/** 圓形容器 */
const RoundContainer = styled(SquareContainer)`
    borderRadius: ${(props) => `${props.size / 2}px`}
`;

/** 圓角容器 */
const RadiusContainer = styled.View<{ borderRadius: string, bg?: string }>`
    borderRadius: ${(props) => `${props.borderRadius}px`};
    ${(props) => props.bg ? `backgroundColor:${props.bg}` : undefined};
`;

/** 製造間隔的view */
const SpaceView = styled.View<{ height?: number, width?: number}>`
    ${(props) => props.width ? `width:${props.width}px` : undefined}
    ${(props) => props.height ? `width:${props.height}px` : undefined}
`;

/** 水平分隔線 */
const SpaceLine = styled.View`
    width: 100%;
    height: 1px;
    backgroundColor: ${({ theme }): string => theme.COLORS.FORM_TAB_LINE};
`;

/** 物件外層陰影 */
const BorderShadow = styled.View<{ borderRadius: number, shadowColor?: string, shadowOffsetX?: number, shadowOffsetY?: number }>`
    backgroundColor: ${({ theme }): string => theme.COLORS.COMPONENT_BG};
    borderRadius: ${(props) => props.borderRadius}px;
    shadowColor: ${(props) => props.shadowColor ? props.shadowColor : props.theme.COLORS.BORDER_SHADOW};
    shadowOffset: ${(props) => props.shadowOffsetX || '0' } ${(props) => props.shadowOffsetY || '2' }px;
    shadowOpacity: 1;
    shadowRadius: 6px;
    overflow: visible;
    elevation: 3
`;

const StretchTransparent = styled.View`
    ${SharedCSS.stretchTransparent}
`;

const LinearGradientContainer = styled(LinearGradient)<{ width?: string, height?: string }>`
    ${(props) => props.width ? `width:${props.width}px` : undefined}
    ${(props) => props.height ? `height:${props.height}px` : undefined}
`

export default {
    Custom,
    Center,
    Row,
    Column,
    TransparentFull,
    SceneScrollContainer,
    SafeArea,
    SceneContainer,
    FilledColumn,
    FilledRow,
    WebViewContainer,
    SquareContainer,
    RoundContainer,
    SpaceView,
    SpaceLine,
    BorderShadow,
    StretchTransparent,
    RadiusContainer,
    LinearGradientContainer,
};