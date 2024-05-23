import { createStyles,css } from "antd-style";

export const useStyles = createStyles(()=>({
    container:
    css`
        height: 100vh;
        background-color: rgb(92, 182, 209);

        display:flex;
        align-items: center;
        justify-content: center;
    `,
    content:css`
        border-radius: 6px;

        width:90%;
        height:80vh;
    `,
    rowCss:
    css`
        display:flex;
        justify-content:center;
        align-items:center;
        width:80%;
        height:80%;

        @media (max-width: 768px){
            height:95%;
        }
    `
    ,
    loginImageContainer:css`
        background-image: url('user.jpg');
        background-size:cover;
        width: 50%;
        height:100%;
        
        @media (max-width: 768px) {
            width:0; 
        }
`   ,
    loginForm:css`
        background-color: rgb(255, 255, 255);
        height:100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;

        @media (max-width: 768px) {
            width:100%;
            height:100%;
            padding:20px;
            overflow-y:auto;
            scrollbar-width:none;
        }
    `,
    space:css(`
        padding : 0 !important;
        margin:0 !important;
        margin-bottom: -10px !important;
    `),
    loginFormH1:css`
        margin-top:-30px;
    `,
    notregistered:css(`
        margin-left:30px;
        &:hover{
            cursor: pointer;
            color: blue;
            
        }
    `),
    RememberMeStyle:
    css(`
        display:flex;
        flex-direction:row;
        width:100%;
        align-items:center;
        justify-content:end;
        margin-top:-20px;
    `)
}));