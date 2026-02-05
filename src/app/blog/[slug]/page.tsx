'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar } from 'lucide-react'
import Link from 'next/link'
import Markdown from 'react-markdown'
import { getPostBySlug, getAllPosts } from '../posts'

// Parse markdown tables to HTML
function parseMarkdownTable(text: string): string {
    const tableRegex = /(\\|.+\\|\\n)+/g

    return text.replace(tableRegex, (tableMatch) => {
        const rows = tableMatch.trim().split('\\n')
        if (rows.length < 2) return tableMatch

        const headers = rows[0].split('|').filter(cell => cell.trim()).map(cell => cell.trim())
        const dataRows = rows.slice(2).filter(row => row.includes('|'))

        let html = '<div class="overflow-x-auto my-6"><table class="min-w-full border-collapse border-2 border-orange-200 rounded-lg">'

        html += '<thead class="bg-gradient-to-r from-orange-100 to-red-100"><tr>'
        headers.forEach(header => {
            html += `<th class="border border-orange-300 px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900">${header}</th>`
        })
        html += '</tr></thead>'

        html += '<tbody class="bg-white">'
        dataRows.forEach((row, index) => {
            const cells = row.split('|').filter(cell => cell.trim()).map(cell => cell.trim())
            const bgClass = index % 2 === 0 ? 'bg-white' : 'bg-orange-50/30'
            html += `<tr class="${bgClass} hover:bg-orange-50 transition-colors">`
            cells.forEach(cell => {
                html += `<td class="border border-orange-200 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700">${cell}</td>`
            })
            html += '</tr>'
        })
        html += '</tbody></table></div>'

        return html
    })
}

export default function BlogPostPage() {
    const params = useParams()
    const router = useRouter()
    const slug = params.slug as string

    const post = getPostBySlug(slug)

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Bài viết không tồn tại</h1>
                    <Link href="/blog">
                        <Button>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Quay lại Blog
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    const Icon = post.icon
    const processedContent = parseMarkdownTable(post.content)

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50/30 via-white to-orange-50/20">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/blog" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <Button variant="ghost">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Quay lại
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-4xl">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                        <span className="text-orange-600 font-medium text-sm sm:text-base">{post.category}</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                        </div>
                        <span>•</span>
                        <span>{post.readTime} đọc</span>
                    </div>
                </div>

                {/* Content */}
                <div
                    className="prose prose-orange max-w-none
                               prose-headings:text-gray-900 prose-headings:font-bold
                               prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b-2 prose-h2:border-orange-200 prose-h2:pb-2
                               prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                               prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-base sm:prose-p:text-lg
                               prose-li:text-gray-700 prose-li:text-base sm:prose-li:text-lg
                               prose-strong:text-gray-900 prose-strong:font-semibold
                               prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: processedContent }}
                />
            </article>
        </div>
    )
}

// Generate static params for all posts
export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}
