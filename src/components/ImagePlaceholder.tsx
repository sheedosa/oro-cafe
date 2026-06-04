export default function ImagePlaceholder({ className = "aspect-square", text = "Image coming soon" }) {
  return (
    <div className={`relative flex items-center justify-center bg-gold/5 border-[1px] border-gold/20 overflow-hidden ${className}`}>
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/40 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/40 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/40 pointer-events-none"></div>

      <p className="font-sans uppercase tracking-[0.2em] text-[10px] text-gold/70 flex flex-col items-center gap-2 text-center px-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
        {text}
      </p>
    </div>
  );
}
