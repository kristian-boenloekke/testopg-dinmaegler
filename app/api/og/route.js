import { ImageResponse } from 'next/og'

export async function GET() {

    return new ImageResponse(
        (
            <div tw='w-full h-full flex flex-col items-center justify-center rounded-full bg-[#162A41]'>


                    <svg tw='absolute top-33'  width="450" height="450" viewBox="0 0 54 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.425996 48.8142L0.375 19.2468L0.39145 19.2807L26.8511 0.0339458L26.8169 0L53.2595 19.2468V48.7294L16.9862 48.7448V42.2613L46.7683 42.2443V22.5225L26.8169 8.01023L6.9167 22.5564L6.90025 48.8143" fill="#ffffff" />
                    </svg>

              
            </div>
        ),
        {
            width: 800,
            height: 800,
        }
    )
}