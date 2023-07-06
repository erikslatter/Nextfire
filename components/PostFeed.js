import Link from 'next/link';

export default function PostFeed({posts, admin}) {
    return posts ? posts.map((post) => <PostItem post={post} key={post.slug} admin={admin} />) : null;
}

//One item of the PostFeed. Not an entire post, just an overview
function PostItem({post}) {
    
    const wordCount = post?Content.trim().split(/\s+/g).length : null;
    const minutesToRead = (wordCount / 100 + 1).toFixed(0);
    return (
        <div className="card">
            <Link href={`/${post.username}`}>
                <a>
                    <strong>By @{post.username}</strong>
                </a>
            </Link>

            <Link href={`/${post.username}/${post.slug}`}>
                <h2>
                    <a>{post.title}</a>
                </h2>
            </Link>
            <footer>
                <span>
                    {wordCount} words. {minutesToRead} min read
                </span>
                <span>❤️ {post.heartCount} Hearts</span>
            </footer>
        </div>
    );
}