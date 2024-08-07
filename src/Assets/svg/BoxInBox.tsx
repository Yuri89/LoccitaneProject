

type SVGConfig = {
    height: `${number}px`,
    width: `${number}px`,
    fill: `#${string}` | `rgb${string}` 
}

export const BoxInBox = (props: SVGConfig) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_12_367)">
                <path d="M116.25 58.125V0H38.75V58.125H0V125.938H155V58.125H116.25ZM67.8125 116.25H9.6875V67.8125H29.0625V77.5H48.4375V67.8125H67.8125V116.25ZM48.4375 58.125V9.6875H67.8125V19.375H87.1875V9.6875H106.562V58.125H48.4375ZM145.312 116.25H87.1875V67.8125H106.562V77.5H125.938V67.8125H145.312V116.25ZM0 155H29.0625V145.312H125.938V155H155V135.625H0V155Z" fill={props.fill} />
            </g>
            <defs>
                <clipPath id="clip0_12_367">
                    <rect width="155" height="155" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}