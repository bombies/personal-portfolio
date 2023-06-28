import localFont from "next/font/local";

export const SFProDisplay = localFont({
    src: [
        {
            path: './sf-pro-display/SF-Pro-Display-Black.otf',
            weight: '900',
            style: 'normal'
        },
        {
            path: './sf-pro-display/SF-Pro-Display-Heavy.otf',
            weight: '800',
            style: 'normal'
        },
        {
            path: './sf-pro-display/SF-Pro-Display-Bold.otf',
            weight: '700',
            style: 'normal'
        },
        {
            path: './sf-pro-display/SF-Pro-Display-Semibold.otf',
            weight: '600',
            style: 'normal'
        },
        {
            path: './sf-pro-display/SF-Pro-Display-Medium.otf',
            weight: '500',
            style: 'normal'
        },
        {
            path: './sf-pro-display/SF-Pro-Display-Regular.otf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './sf-pro-display/SF-Pro-Display-Thin.otf',
            weight: '300',
            style: 'normal'
        },
        {
            path: './sf-pro-display/SF-Pro-Display-Light.otf',
            weight: '200',
            style: 'normal'
        },
        {
            path: './sf-pro-display/SF-Pro-Display-Ultralight.otf',
            weight: '100',
            style: 'normal'
        },
        {
            path: './sf-pro-display/SF-Pro-Display-BlackItalic.otf',
            weight: '900',
            style: 'italic'
        },
        {
            path: './sf-pro-display/SF-Pro-Display-BoldItalic.otf',
            weight: '600',
            style: 'italic'
        },
    ],
    variable: '--font-sf-pro-display',
})

export const SFMono = localFont({
    src: [
        {
            path: './sf-mono/SFMonoRegular.otf',
            weight: '400',
            style: 'normal'
        }
    ],
    variable: '--font-sf-mono',
})