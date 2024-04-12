import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        title: string;

        colors:{
            backgroundSideBar: string;
            textSiderBar: string;

            background: string;
            text: string;
        }
    
    }
}