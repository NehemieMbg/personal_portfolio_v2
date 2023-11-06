import { PostCard } from '../components';
import { blog } from '../constants';

const page = () => {
  return (
    <section className="max-w-wide mx-auto w-full pb-20">
      <h2 className="">{blog.title}</h2>
      <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1 ">
        {blog.posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
};
export default page;
