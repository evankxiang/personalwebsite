export default function Blog() {
    const posts = [
        {
            date: "Feb 10, 2026",
            title: "Getting Started with Personal Websites",
            slug: "#",
        },
        {
            date: "Jan 25, 2026",
            title: "Reflections on Learning to Code",
            slug: "#",
        },
        {
            date: "Jan 8, 2026",
            title: "My Favorite Tools for Productivity",
            slug: "#",
        },
        {
            date: "Dec 15, 2025",
            title: "What I Learned Building My First Full-Stack App",
            slug: "#",
        },
        {
            date: "Nov 20, 2025",
            title: "A Beginner's Guide to Systems Design",
            slug: "#",
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
