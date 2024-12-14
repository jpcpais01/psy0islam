'use client'

import { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Journal from './pages/Journal'
import Chat from './pages/Chat'
import Resources from './pages/Resources'
import Navigation from './Navigation'
import SplashScreen from './SplashScreen'

export default function CarouselWrapper() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: 'center',
    dragFree: false,
    containScroll: 'trimSnaps',
    skipSnaps: false,
    inViewThreshold: 0.7,
    axis: 'x',
    direction: 'ltr',
    watchDrag: true,
    duration: 20,
    startIndex: 1,
    slidesToScroll: 1
  })
  const [selectedIndex, setSelectedIndex] = useState(1)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    // Scroll to center page initially
    emblaApi.scrollTo(1)
    
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const scrollTo = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }

  return (
    <>
      <SplashScreen />
      <div className="h-screen flex flex-col bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] dark:from-neutral-900 dark:to-neutral-950">
        <div className="flex-1 overflow-hidden transform-gpu" ref={emblaRef}>
          <div className="flex h-full will-change-transform">
            <div className="flex-[0_0_100%] min-w-0 relative p-4 transform-gpu">
              <div className="h-full max-w-2xl mx-auto">
                {selectedIndex === 0 || selectedIndex === 1 ? <Journal /> : null}
              </div>
            </div>
            <div className="flex-[0_0_100%] min-w-0 relative p-4 transform-gpu">
              <div className="h-full max-w-2xl mx-auto">
                <Chat />
              </div>
            </div>
            <div className="flex-[0_0_100%] min-w-0 relative p-4 transform-gpu">
              <div className="h-full max-w-2xl mx-auto">
                {selectedIndex === 1 || selectedIndex === 2 ? <Resources /> : null}
              </div>
            </div>
          </div>
        </div>
        <Navigation onNavigate={scrollTo} activeIndex={selectedIndex} />
      </div>
    </>
  )
}
