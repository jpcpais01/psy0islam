import { BookOpenIcon, ChatBubbleBottomCenterTextIcon, BookmarkIcon } from '@heroicons/react/24/outline'

interface NavigationProps {
  onNavigate: (index: number) => void
  activeIndex: number
}

export default function Navigation({ onNavigate, activeIndex }: NavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg border-t border-neutral-200/50 dark:border-neutral-800/50 flex items-center justify-around px-4 z-50">
      <button
        onClick={() => onNavigate(0)}
        className={`flex flex-col items-center px-6 py-2 rounded-xl transition-all duration-200 ${
          activeIndex === 0 
            ? 'text-primary scale-105' 
            : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
        }`}
      >
        <BookmarkIcon className={`h-6 w-6 transition-transform duration-200 ${
          activeIndex === 0 ? 'scale-110' : ''
        }`} />
        <span className="text-xs mt-1.5 font-medium">Journal</span>
      </button>
      
      <button
        onClick={() => onNavigate(1)}
        className={`flex flex-col items-center px-6 py-2 rounded-xl transition-all duration-200 ${
          activeIndex === 1 
            ? 'text-primary scale-105' 
            : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
        }`}
      >
        <ChatBubbleBottomCenterTextIcon className={`h-6 w-6 transition-transform duration-200 ${
          activeIndex === 1 ? 'scale-110' : ''
        }`} />
        <span className="text-xs mt-1.5 font-medium">Chat</span>
      </button>
      
      <button
        onClick={() => onNavigate(2)}
        className={`flex flex-col items-center px-6 py-2 rounded-xl transition-all duration-200 ${
          activeIndex === 2 
            ? 'text-primary scale-105' 
            : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
        }`}
      >
        <BookOpenIcon className={`h-6 w-6 transition-transform duration-200 ${
          activeIndex === 2 ? 'scale-110' : ''
        }`} />
        <span className="text-xs mt-1.5 font-medium">Resources</span>
      </button>
    </nav>
  )
}
