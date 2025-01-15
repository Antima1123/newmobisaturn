import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';
import { BlogCard } from './BlogCard';

export function VirtualizedBlogList({ posts, onPostClick }: { posts: any[], onPostClick: (post: any) => void }) {
  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: posts.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 400, // Approximate height of each blog card
    overscan: 5
  });

  return (
    <div
      ref={parentRef}
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      style={{
        height: '800px',
        overflow: 'auto',
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: virtualItem.size,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            {/* Your existing blog card component */}
            <BlogCard post={posts[virtualItem.index]} onClick={onPostClick} />
          </div>
        ))}
      </div>
    </div>
  );
} 