import { css } from 'styled-components/native';
import { Platform } from 'react-native';

/** 整理所有常用css，共享給styled-components */
const fullPage = css`
    flex: 1
`;
const w100 = css`
    width: 100%;
`;
const h100 = css`
    height: 100%;
`;
const flexRow = css`
    flexDirection: row
`;
const flexColumn = css`
    flexDirection: column
`;
const flexJustifyCenter = css`
    justifyContent: center;
`;
const flexJustifyStart = css`
    justifyContent: flex-start;
`;
const flexJustifyEnd = css`
    justifyContent: flex-end;
`;
const flexJustifySpbt = css`
    justifyContent: space-between;
`;
const flexJustifySpar = css`
    justifyContent: space-around;
`;
const flexAlignCenter = css`
    alignItems: center;
`;
const flexAlignStart = css`
    alignItems: flex-start;
`;
const flexAlignEnd = css`
    alignItems: flex-end;
`;

const stretchTransparent = css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    backgroundColor: ${({ theme }) => theme.COLORS.TRANSPARENT};
`;

/** 整頁遮罩 */
const stretchMask = css`
    ${stretchTransparent}
    backgroundColor: ${({ theme }) => theme.COLORS.MASK_BG};
`;

export default {
    fullPage,
    w100,
    h100,
    flexRow,
    flexColumn,
    flexJustifyCenter,
    flexJustifyStart,
    flexJustifyEnd,
    flexJustifySpbt,
    flexJustifySpar,
    flexAlignCenter,
    flexAlignStart,
    flexAlignEnd,
    stretchTransparent,
    stretchMask,
}