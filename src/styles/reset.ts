import { css } from "@emotion/react";

const reset = css`
    @import url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    * {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-family: 'Pretendard-Regular';
        vertical-align: baseline;
    }
    input, textarea, select{
        background: var(--side-c);
        color: inherit;
        border: none;
        font: inherit;
        cursor: text;
        outline: inherit;
        resize: none;
    }
    body{
        background-color: #111111;
    }
`

export default reset;