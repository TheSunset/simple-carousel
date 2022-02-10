/// <reference types="react" />
interface IStyle {
    color: string;
    backgroundImage: string;
}
interface IData {
    title: string[];
    desc: string[];
    style: IStyle;
}
export interface IProps {
    data: IData[];
    width: number;
    height: number;
    delay: number;
    speed: number;
}
declare function Carousel(props: IProps): JSX.Element;
export default Carousel;
