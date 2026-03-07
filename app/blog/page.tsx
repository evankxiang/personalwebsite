export default function Blog() {
    const posts = [
        {
            date: "March 6, 2026",
            title: "Against the Idea of High School Science Competitions",
            slug: "/blog/science-competitions",
        },
    ];

    return (
        <>
            <ul className="blog-list">
                {posts.map((post, idx) => (
                    <li key={idx} className="blog-entry">
                        <div className="blog-date">{post.date}</div>
                        <div className="blog-title">
                            <a href={post.slug}>{post.title}</a>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
