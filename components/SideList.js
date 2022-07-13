import Link from 'next/link'

export default function SideList({ postListData }) {

    return (
        <div>
            <div className='navigation'>
                <ul>
                    {postListData.map((post, i) => (
                        <li key={i} className='nav-title'>
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx>{`
            .navigation {
                min-width: 200px;
                margin-right: 30px;
                margin-top: 30px;
            }
            .nav-title {
                display: block;
                border: 1px solid #000;
                padding: 5px 10px;
            }
        `}
            </style>
        </div>
    )
}