import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: React.ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            {...props}
            src="/img/fish2go_favicon.png"
            alt="App Logo"
            className="bg-gray-500 p-2 rounded"
        />
    );
}
