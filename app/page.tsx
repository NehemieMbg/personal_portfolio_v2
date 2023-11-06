import { Hero, RecentPosts, SelectedWork } from './components';

export default function Home() {
  return (
    <main className="max-w-wide mx-auto w-full">
      <Hero />
      <SelectedWork />
      <RecentPosts />
    </main>
  );
}
