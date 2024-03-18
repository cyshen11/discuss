import paths from '@/paths'
import Link from 'next/link'
import PostShow from '@/components/posts/post-show'
import CommentList from '@/components/comments/comment-list'
import { fetchCommentsByPostId } from '@/db/queries/comments'
import CommentCreateForm from '@/components/comments/comment-create-form'
import { Suspense } from 'react'
import PostShowLoading from '@/components/posts/post-show-loading'

interface PostShowPageProps {
    params: {
        slug: string
        postId: string
    }
}

export default function PostShowPage({ params }: PostShowPageProps) {
    const { slug, postId } = params
    
    return (
        <div className="space-y-3">
            <title>{slug}</title>
            <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
                {'< '}Back to {slug}
            </Link>
            <Suspense fallback={<PostShowLoading />}>
                <PostShow postId={postId}/>
            </Suspense>
            <CommentCreateForm postId={postId} startOpen />
            <CommentList postId={postId} />
        </div>
    )
}