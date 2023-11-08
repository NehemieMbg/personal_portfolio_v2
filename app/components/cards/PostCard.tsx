import Image from 'next/image';
import WorkBtn from '../buttons/WorkBtn';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface PostCardProps {
  post: {
    title: string;
    date: string;
    link: string;
    mockup?: string;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="relative">
      <a
        href={post.link}
        target="_blank"
        className="work-item relative flex items-center justify-center w-full aspect-[1] h-[240px] bg-neutral-700 overflow-hidden rounded-xl mb-4 hover:filter hover:grayscale transition-all duration-200 ease-in-out"
      >
        {post.mockup && (
          <Image
            src={post.mockup}
            alt={post.title}
            height={372}
            width={432}
            className="h-full w-full aspect-auto object-cover object-center absolute z-[10]"
          />
        )}

        <WorkBtn />
      </a>

      <div className="flex flex-col gap-1">
        <p className="text-sm text-neutral-400 font-light">{post.date}</p>

        <p className="flex items-end gap-2 font-light">{post.title}</p>
      </div>
    </div>
  );
};
export default PostCard;
