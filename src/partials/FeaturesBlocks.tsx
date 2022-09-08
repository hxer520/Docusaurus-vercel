import React from "react";

function FeaturesBlocks() {
    const iconStars = (
        <svg
            className="w-16 h-16 p-1 -mt-1 mb-2"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                />
                <g strokeWidth="2">
                    <path
                        className="stroke-current text-white"
                        d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"
                    />
                    <path
                        className="stroke-current text-white"
                        d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"
                    />
                    <path
                        className="stroke-current text-white"
                        d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"
                    />
                    <path
                        className="stroke-current text-blue-300"
                        d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
                        strokeLinecap="square"
                    />
                </g>
            </g>
        </svg>
    );
    const iconTalking = (
        <svg
            className="w-16 h-16 p-1 -mt-1 mb-2"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                />
                <g strokeLinecap="square" strokeWidth="2">
                    <path
                        className="stroke-current text-blue-300"
                        d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207"
                    />
                    <path
                        className="stroke-current text-white"
                        d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285"
                    />
                </g>
            </g>
        </svg>
    );
    const iconDoor = (
        <svg
            className="w-16 h-16 p-1 -mt-1 mb-2"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                />
                <g transform="translate(22.857 19.429)" strokeWidth="2">
                    <path
                        className="stroke-current text-white"
                        strokeLinecap="square"
                        d="M12.571 4.571V0H0v25.143h12.571V20.57"
                    />
                    <path
                        className="stroke-current text-white"
                        d="M16 12.571h8"
                    />
                    <path
                        className="stroke-current text-white"
                        strokeLinecap="square"
                        d="M19.429 8L24 12.571l-4.571 4.572"
                    />
                    <circle
                        className="stroke-current text-blue-300"
                        strokeLinecap="square"
                        cx="12.571"
                        cy="12.571"
                        r="3.429"
                    />
                </g>
            </g>
        </svg>
    );
    const iconCards = (
        <svg
            className="w-16 h-16 p-1 -mt-1 mb-2"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                />
                <g strokeLinecap="square" strokeWidth="2">
                    <path
                        className="stroke-current text-white"
                        d="M20.571 20.571h13.714v17.143H20.571z"
                    />
                    <path
                        className="stroke-current text-blue-300"
                        d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58"
                    />
                </g>
            </g>
        </svg>
    );
    const iconArrows = (
        <svg
            className="w-16 h-16 p-1 -mt-1 mb-2"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                />
                <g strokeWidth="2">
                    <path
                        className="stroke-current text-blue-300"
                        d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                    />
                    <path
                        className="stroke-current text-white"
                        d="M20.571 37.714h5.715L36.57 26.286h8"
                    />
                    <path
                        className="stroke-current text-blue-300"
                        strokeLinecap="square"
                        d="M41.143 34.286l3.428 3.428-3.428 3.429"
                    />
                    <path
                        className="stroke-current text-white"
                        strokeLinecap="square"
                        d="M41.143 29.714l3.428-3.428-3.428-3.429"
                    />
                </g>
            </g>
        </svg>
    );
    const iconRadar = (
        <svg
            className="w-16 h-16 p-1 -mt-1 mb-2"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                />
                <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle
                        className="stroke-current text-white"
                        strokeLinecap="square"
                        cx="12.571"
                        cy="12.571"
                        r="1.143"
                    />
                    <path
                        className="stroke-current text-white"
                        d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                    />
                    <path
                        className="stroke-current text-blue-300"
                        d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                    />
                </g>
            </g>
        </svg>
    );
    return (
        <section className="relative">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    <div
                        className="max-w-3xl mx-auto text-center pb-12 md:pb-20"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h2 className="h2 mb-4">关于我们</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-200">
                            为邻居提供优选产品、买到高性价比正品是丰小团的持续追求的理念
                        </p>
                    </div>

                    <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                        <div data-aos="fade-up" data-aos-delay="100">
                            <div className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded shadow-2xl">
                                {iconStars}
                                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                    品类丰富
                                </h4>
                                <p className="text-gray-600 dark:text-gray-200 text-center">
                                    涵盖装修前后所有涉及品类，每种品类支持多种品牌,多种价位开团
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="150">
                            <div className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded shadow-2xl">
                                {iconTalking}
                                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                    性价比高
                                </h4>
                                <p className="text-gray-600 dark:text-gray-200 text-center">
                                    对接源头工厂,摆脱一切中间商环节,直接让利业主
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                            <div className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded shadow-2xl">
                                {iconDoor}
                                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                    团购流程
                                </h4>
                                <p className="text-gray-600 dark:text-gray-200 text-center">
                                    报名团购——进群——确定产品——达到数量后开团——送装——品牌官方售后
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="100">
                            <div className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded shadow-2xl">
                                {iconCards}
                                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                    新一代团购
                                </h4>
                                <p className="text-gray-600 dark:text-gray-200 text-center">
                                    线上选品,线下提货
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="150">
                            <div className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded shadow-2xl">
                                {iconArrows}
                                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                    新零售模式
                                </h4>
                                <p className="text-gray-600 dark:text-gray-200 text-center">
                                    线下商场/门店直接付款,购物有保障
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <div className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded shadow-2xl">
                                {iconRadar}

                                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                    更多服务
                                </h4>
                                <p className="text-gray-600 dark:text-gray-200 text-center">
                                    联系小团子进群了解吧~
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="max-w-3xl mx-auto text-center py-12 md:py-20"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h2 className="h2 mb-4">做最好的家居团购平台</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-200">
                            快来开团吧~ 😊
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesBlocks;
