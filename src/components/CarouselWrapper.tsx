'use client'

import { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Journal from './pages/Journal'
import Chat from './pages/Chat'
import Resources from './pages/Resources'
import Navigation from './Navigation'

export default function CarouselWrapper() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: 'center',
    dragFree: false,
    containScroll: 'trimSnaps',
    skipSnaps: false,
    inViewThreshold: 0.7,
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
    <div className="h-screen flex flex-col bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] dark:from-neutral-900 dark:to-neutral-950">
      <div className="flex-1 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          <div className="flex-[0_0_100%] min-w-0 relative p-4">
            <div className="h-full max-w-2xl mx-auto">
              <Journal />
            </div>
          </div>
          <div className="flex-[0_0_100%] min-w-0 relative p-4">
            <div className="h-full max-w-2xl mx-auto">
              <Chat />
            </div>
          </div>
          <div className="flex-[0_0_100%] min-w-0 relative p-4">
            <div className="h-full max-w-2xl mx-auto">
              <Resources />
            </div>
          </div>
        </div>
      </div>
      <Navigation onNavigate={scrollTo} activeIndex={selectedIndex} />
    </div>
  )
}
