import { ImageResponse } from 'next/og'


const aspectRatios = {
    '1200x630': { width: 1200, height: 630 },
    '1x1': { width: 1080, height: 1080 },
    '4x3': { width: 1024, height: 768 },
    '16x9': { width: 1920, height: 1080 },
}

export async function GET(request) {
    const url = new URL(request.url)
    const aspectRatio = url.pathname.split('/').pop()
    const config = aspectRatios[aspectRatio] || aspectRatios['1200x630']

    return new ImageResponse(
        (
            <div tw='w-full h-full flex flex-col items-center justify-center'>

                <div tw='w-full h-[50%] flex flex-col items-center justify-center bg-white'>


                    <svg width="900" height="180" viewBox="0 0 296 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_286_54)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 59.71V23.7335L26.4428 0.166016L38.2841 10.7243L32.6616 15.5246L26.4428 9.9744L6.49145 27.7445V51.8106L24.5686 51.9144V59.71H0Z" fill="#AAAAAA" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.426 59.7725L26.375 23.5675L26.3914 23.6091L52.8511 0.0415663L52.8169 0L79.2595 23.5675V59.6686L42.9862 59.6875V51.7485L72.7683 51.7277V27.5786L52.8169 9.80845L32.9167 27.6201L32.9002 59.7726" fill="#162A41" />
                            <path d="M98.2648 59.6677H90.4316V31.6675H98.3329C101.784 31.6675 104.611 32.9692 106.813 35.5726C109.015 38.1482 110.117 41.3609 110.117 45.2106C110.117 49.6973 109.027 53.2285 106.847 55.8041C104.69 58.3798 101.829 59.6677 98.2648 59.6677ZM98.1626 36.9435H95.8127V54.4332H98.1967C100.308 54.4332 101.932 53.63 103.067 52.0237C104.225 50.4174 104.804 48.1463 104.804 45.2106C104.804 42.718 104.225 40.7239 103.067 39.2284C101.909 37.7051 100.274 36.9435 98.1626 36.9435Z" fill="#162A41" />
                            <path d="M119.278 59.6677H114.033V31.6675H119.278V59.6677Z" fill="#162A41" />
                            <path d="M129.291 59.6677H124.046V31.6675H129.802L135.149 43.2581C135.898 44.8921 136.545 46.4292 137.09 47.8694C137.657 49.2818 138.021 50.2789 138.18 50.8605L138.452 51.7744C138.225 49.725 138.111 46.8862 138.111 43.2581V31.6675H143.356V59.6677H137.601L132.117 48.0771C131.391 46.5815 130.744 45.1137 130.176 43.6735C129.631 42.2056 129.257 41.1255 129.052 40.4331L128.78 39.3945C129.12 41.8871 129.291 44.7813 129.291 48.0771V59.6677Z" fill="#162A41" />
                            <path d="M161.032 59.6677H155.787L157.762 31.6675H163.518L166.719 41.804C167.264 43.4935 167.73 45.0444 168.116 46.4569C168.502 47.8694 168.752 48.8664 168.865 49.448L169.035 50.2789C169.399 48.451 170.193 45.626 171.419 41.804L174.655 31.6675H180.41L182.794 59.6677H177.55L176.698 48.8249L176.255 40.6408C175.665 42.718 174.848 45.446 173.803 48.8249L170.568 59.3769H167.469L164.267 48.8249C163.745 47.1077 163.302 45.5706 162.939 44.2136C162.576 42.8565 162.337 41.9148 162.224 41.3886L162.054 40.6408C162.054 42.6072 161.951 45.3352 161.747 48.8249L161.032 59.6677Z" fill="#162A41" />
                            <path d="M190.253 59.6677H184.77L195.838 31.6675H214.331V36.7773H205.476V43.1334H213.377V48.2017H205.476V54.5578H214.467V59.6677H200.402V53.9347H192.603L190.253 59.6677ZM195.157 47.7863L194.748 48.7833H200.402V34.1601C199.471 37.0958 197.723 41.6379 195.157 47.7863Z" fill="#162A41" />
                            <path d="M238.512 57.092C236.332 59.0307 233.585 60 230.27 60C226.592 60 223.606 58.7121 221.313 56.1365C219.02 53.5608 217.873 50.0573 217.873 45.626C217.873 41.2501 219.065 37.7466 221.449 35.1156C223.856 32.4845 226.898 31.1689 230.576 31.1689C233.165 31.1689 235.401 31.7506 237.286 32.9138V39.3114C235.106 37.7882 232.87 37.0266 230.576 37.0266C228.419 37.0266 226.705 37.8159 225.434 39.3945C224.162 40.9455 223.527 43.0226 223.527 45.626C223.527 48.2571 224.151 50.3481 225.4 51.899C226.648 53.45 228.351 54.2255 230.508 54.2255C231.485 54.2255 232.449 54.0454 233.403 53.6854V48.4094H229.691V42.9672H238.512V57.092Z" fill="#162A41" />
                            <path d="M256.494 59.6677H242.769V31.6675H248.013V54.0593H256.494V59.6677Z" fill="#162A41" />
                            <path d="M273.659 59.6677H259.389V31.6675H273.522V36.7773H264.668V43.1334H272.569V48.2017H264.668V54.5578H273.659V59.6677Z" fill="#162A41" />
                            <path d="M285.749 36.8604H283.161V44.7536H285.647C287.917 44.7536 289.053 43.3965 289.053 40.6824C289.053 39.4915 288.758 38.5637 288.167 37.899C287.577 37.2066 286.771 36.8604 285.749 36.8604ZM283.161 59.6677H277.916V31.6675H285.851C288.417 31.6675 290.472 32.4984 292.016 34.1601C293.582 35.8218 294.366 37.9821 294.366 40.6408C294.366 44.629 292.969 47.3847 290.177 48.9079L296 59.6677H289.734L284.762 49.9465H283.161V59.6677Z" fill="#162A41" />
                        </g>
                        <defs>
                            <clipPath id="clip0_286_54">
                                <rect width="900" height="180" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <div tw='h-[50%] w-full flex items-center justify-center bg-[#162A41]'>

                    <p tw='text-4xl text-white'>Din Mægler Roskilde, er din boligbutik i lokalområdet</p>
                </div>

            </div>
        ),
        {
            width: config.width,
            height: config.height,
        }
    )
}