import { post as post1 } from './post-1'
import { post as post2 } from './post-2'
import { post as post3 } from './post-3'
import { post as post4 } from './post-4'
import { post as post5 } from './post-5'
import { post as post6 } from './post-6'

import { BlogPost } from '../types'
import { postsMetadata } from './metadata'

// For the list page, return metadata only (faster loading)
export function getAllPosts(): Omit<BlogPost, 'content'>[] {
    return postsMetadata
}

// For individual post pages, return full content
export function getPostBySlug(slug: string): BlogPost | undefined {
    const fullPosts: BlogPost[] = [
        post1,
        post2,
        post3,
        post4,
        post5,
        post6,
    ]

    return fullPosts.find(post => post.slug === slug)
}
