import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function Home() {
  const { data: posts } = await supabase.from("posts").select("*").order("created_at", { ascending: false });
  return (
    <main style={{ padding: 40 }}>
      <h1>📝 我的博客</h1>
      {posts?.map(p => (
        <article key={p.id}>
          <h2>{p.title}</h2>
          <p>{p.content}</p>
          <hr />
        </article>
      ))}
    </main>
  );
}
