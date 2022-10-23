import PostListItem from "./tuiter-post-item"
import posts from "./posts";

const PostList = () => {
    return (
        <>
        <div className="list-group wd-post-list-group">
            {
                posts.map(p => {
                    return (<PostListItem posts={p}/>);
                })
            }
        </div>
        </>
    );
}

export default PostList;