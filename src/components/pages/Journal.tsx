import { useState, useEffect } from 'react'
import EntryModal from '@/components/EntryModal'
import ConfirmDialog from '@/components/ConfirmDialog'
import { JournalEntry } from '@/types/journal'

export default function Journal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [title, setTitle] = useState('');
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [entryToDelete, setEntryToDelete] = useState<string | null>(null);

  // Load entries from localStorage when component mounts
  useEffect(() => {
    const savedEntries = localStorage.getItem('journalEntries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  // Save new entry
  const saveEntry = () => {
    if (!newEntry.trim()) return;

    const entry: JournalEntry = {
      id: Date.now().toString(),
      title: title.trim() || 'Untitled Entry',
      content: newEntry,
      date: new Date().toISOString(),
    };

    const updatedEntries = [entry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
    
    // Clear form
    setNewEntry('');
    setTitle('');
  };

  // Delete entry
  const deleteEntry = (id: string) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
    if (selectedEntry?.id === id) {
      setSelectedEntry(null);
    }
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Handle entry card click
  const handleEntryClick = (entry: JournalEntry, e: React.MouseEvent) => {
    // Check if the click was on the delete button
    const target = e.target as HTMLElement;
    if (target.closest('[data-delete-button]')) {
      e.stopPropagation();
      setEntryToDelete(entry.id);
      return;
    }
    
    // Otherwise, open the modal
    setSelectedEntry(entry);
  };

  return (
    <div className="h-[100dvh] flex flex-col">
      <div className="flex-1 overflow-y-auto px-3 pt-4 pb-28">
        <div className="flex flex-col gap-4">
          {/* New Entry Section */}
          <section className="peaceful-card p-6 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-neutral-800 dark:text-neutral-100">Today&apos;s Reflection</h2>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            
            <input
              type="text"
              className="peaceful-input"
              placeholder="Entry Title (optional)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            
            <textarea
              className="peaceful-input min-h-[120px] resize-none"
              placeholder="What's on your mind today?"
              value={newEntry}
              onChange={(e) => setNewEntry(e.target.value)}
            />
            
            <div className="flex justify-end">
              <button 
                className="peaceful-button-primary"
                onClick={saveEntry}
                disabled={!newEntry.trim()}
              >
                Save Entry
              </button>
            </div>
          </section>

          {/* Previous Entries */}
          <section className="peaceful-card p-6">
            <h2 className="text-lg font-medium text-neutral-800 dark:text-neutral-100 mb-4">Previous Entries</h2>
            
            <div className="space-y-4">
              {entries.map((entry) => (
                <article 
                  key={entry.id}
                  onClick={(e) => handleEntryClick(entry, e)}
                  className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-neutral-800 dark:text-neutral-100">{entry.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        {formatDate(entry.date)}
                      </span>
                      <button
                        data-delete-button
                        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Delete entry"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">
                    {entry.content}
                  </p>
                </article>
              ))}
              
              {entries.length === 0 && (
                <div className="text-center text-gray-500 mt-10">
                  <p>&quot;Your journal is a sacred space for self-reflection and growth.&quot;</p>
                  <p className="mt-2">Start your journey of introspection today.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Entry Modal */}
      <EntryModal
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
        onDelete={(id) => setEntryToDelete(id)}
      />

      {/* Confirm Delete Dialog */}
      <ConfirmDialog
        isOpen={entryToDelete !== null}
        onClose={() => setEntryToDelete(null)}
        onConfirm={() => {
          if (entryToDelete) {
            deleteEntry(entryToDelete);
            setEntryToDelete(null);
          }
        }}
        title="Delete Entry"
        message="Are you sure you want to delete this entry? This action cannot be undone."
      />
    </div>
  )
}
