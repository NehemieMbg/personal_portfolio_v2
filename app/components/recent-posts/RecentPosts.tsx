import { posts } from '@/app/constants';
import Link from 'next/link';
import PostCard from '../cards/PostCard';

const RecentPosts = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex items-center justify-between font-light">
        <h3>{posts.title}</h3>
        <Link
          href={posts.more.path}
          className="hover:text-red-400 transition-colors duration-200"
        >
          {posts.more.label}
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
        {posts.recentPosts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
};
export default RecentPosts;
