import 'react';

declare global {
    namespace JSX {
        interface Element extends React.ReactElement<any, any> {}
        interface ElementClass extends React.Component<any> {}
        interface ElementAttributesProperty {
            props: {};
        }
        interface IntrinsicElements {
            [elem: string]: any;
        }
    }
}
