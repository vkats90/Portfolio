import img1 from '../assets/Photo Gallery/69254890_870777776642164_1413481895830771841_n.jpg'
import img2 from '../assets/Photo Gallery/70654716_950758331972072_168775496984368344_n.jpg'
import img3 from '../assets/Photo Gallery/72784222_2633561206721934_1125812282029930098_n.jpg'
import img4 from '../assets/Photo Gallery/103120197_264799331301783_5397412025232028170_n.jpg'
import img5 from '../assets/Photo Gallery/146281140_818306268725014_3534050906374804847_n.jpg'
import img6 from '../assets/Photo Gallery/243821048_1755133391360344_2353006288342032899_n.jpg'
import img7 from '../assets/Photo Gallery/245387568_1269756110159359_5074627379344455355_n.jpg'
import img8 from '../assets/Photo Gallery/271127548_6656340027769892_811800141649505729_n.jpg'
import img9 from '../assets/Photo Gallery/272655294_144326017987030_1387219056720625463_n.jpg'
import img10 from '../assets/Photo Gallery/Box_2nd_image.webp'
import img11 from '../assets/Photo Gallery/DSC04720-Edit-3-2.webp'

import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import { useState, useRef } from 'react'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import { InView } from 'react-intersection-observer'

export const photos = [
  { src: img1, width: 1080, height: 1350 },
  { src: img2, width: 1080, height: 1350 },
  { src: img10, width: 1265, height: 1265 },
  { src: img3, width: 1080, height: 1350 },
  { src: img4, width: 1080, height: 1350 },
  { src: img5, width: 1080, height: 1350 },
  { src: img11, width: 1800, height: 1201 },
  { src: img6, width: 1080, height: 1350 },
  { src: img7, width: 1080, height: 1350 },
  { src: img8, width: 1080, height: 1350 },
  { src: img9, width: 1080, height: 1350 },
]

export default function Gallery() {
  const [index, setIndex] = useState(-1)
  const fullscreenRef = useRef(null)
  return (
    <>
      <PhotoAlbum
        layout="columns"
        spacing={1}
        photos={photos}
        onClick={({ index: current }) => setIndex(current)}
        renderPhoto={({ wrapperStyle, renderDefaultPhoto }) => (
          <InView rootMargin="-100px 0px">
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`transition duration-300 ease-in hover:blur-[2px] hover:opacity-80 hover:scale-95 ${
                  inView ? 'opacity-1' : 'opacity-0 translate-x-10  blur-md'
                }`}
                style={{ position: 'relative', ...wrapperStyle }}
              >
                {renderDefaultPhoto({ wrapped: true })}
              </div>
            )}
          </InView>
        )}
      />

      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Fullscreen]}
        fullscreen={{ ref: fullscreenRef }}
        on={{
          click: () => (fullscreenRef.current as any)?.enter(),
        }}
      />
    </>
  )
}
