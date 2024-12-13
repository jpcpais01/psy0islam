import ThemeToggle from '@/components/ThemeToggle'

export default function Resources() {
  return (
    <div className="h-full flex flex-col gap-6 animate-fadeIn">
      <div className="flex-1 overflow-y-auto px-3 pb-28">
        {/* Theme toggle positioned at the top right */}
        <div className="flex justify-end mt-4 mb-2">
          <ThemeToggle />
        </div>
        
        <div className="space-y-6">
          {/* Daily Wisdom */}
          <section className="peaceful-card p-6">
            <h2 className="text-lg font-medium text-neutral-800 dark:text-neutral-100 mb-4">Daily Wisdom</h2>
            <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 border border-primary/10 dark:border-primary/20">
              <p className="text-lg text-neutral-800 dark:text-neutral-100 mb-2 font-medium">
                &quot;Indeed, with hardship comes ease.&quot;
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Surah Al-Inshirah [94:5]
              </p>
            </div>
          </section>

          {/* Quick Access Resources */}
          <section className="peaceful-card p-6">
            <h2 className="text-lg font-medium text-neutral-800 dark:text-neutral-100 mb-4">Quick Access</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 rounded-xl bg-secondary dark:bg-neutral-800 hover:bg-secondary/80 dark:hover:bg-neutral-700 transition-colors text-left group">
                <svg className="w-6 h-6 text-accent/80 dark:text-accent/60 mb-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="font-medium text-accent dark:text-accent/80 mb-1">Reading List</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Curated articles and books</p>
              </button>
              
              <button className="p-4 rounded-xl bg-secondary dark:bg-neutral-800 hover:bg-secondary/80 dark:hover:bg-neutral-700 transition-colors text-left group">
                <svg className="w-6 h-6 text-accent/80 dark:text-accent/60 mb-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <h3 className="font-medium text-accent dark:text-accent/80 mb-1">Self-Care</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Mindfulness practices</p>
              </button>
            </div>
          </section>

          {/* Recommended Reading */}
          <section className="peaceful-card p-6">
            <h2 className="text-lg font-medium text-neutral-800 dark:text-neutral-100 mb-4">Recommended Reading</h2>
            <div className="space-y-4">
              <article className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary dark:text-primary/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-neutral-800 dark:text-neutral-100 mb-1">Understanding Islamic Psychology</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">
                    Explore the principles of mental well-being from an Islamic perspective.
                  </p>
                </div>
              </article>

              <article className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary dark:text-primary/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-neutral-800 dark:text-neutral-100 mb-1">Mindfulness in Islam</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">
                    Learn about mindfulness practices through an Islamic lens.
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
