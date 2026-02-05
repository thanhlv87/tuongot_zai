'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Flame, ArrowLeft, Calendar } from 'lucide-react'
import Link from 'next/link'
import { getAllPosts } from './posts'

export default function BlogListPage() {
    const posts = getAllPosts()

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-50/30 via-white to-orange-50/20">
            {/* Navigation */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <Flame className="h-8 w-8 text-orange-600" />
                            <span className="text-xl font-bold text-orange-700">Bông Ớt</span>
                        </Link>
                        <nav className="flex items-center gap-4 sm:gap-6">
                            <Link href="/">
                                <Button variant="ghost" className="text-gray-700 hover:text-orange-600 text-sm sm:text-base">
                                    <ArrowLeft className="mr-1 sm:mr-2 h-4 w-4" />
                                    Trang chủ
                                </Button>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-100 to-red-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Blog Ớt & Sức Khỏe
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
                        Khám phá thế giới ớt cay nóng - từ kiến thức đến lợi ích sức khỏe
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="flex-1 py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => {
                            const Icon = post.icon
                            return (
                                <Link key={post.id} href={`/blog/${post.slug}`}>
                                    <Card className="h-full hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group border-2 hover:border-orange-300">
                                        <CardHeader>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600 group-hover:scale-110 transition-transform" />
                                                <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                                                    {post.category}
                                                </Badge>
                                            </div>
                                            <CardTitle className="text-xl sm:text-2xl group-hover:text-orange-600 transition-colors line-clamp-2">
                                                {post.title}
                                            </CardTitle>
                                            <CardDescription className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                                                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                                                <span>{post.date}</span>
                                                <span>•</span>
                                                <span>{post.readTime}</span>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm sm:text-base text-gray-700 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="mt-4">
                                                <span className="text-orange-600 font-medium group-hover:underline text-sm sm:text-base">
                                                    Đọc tiếp →
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-12 sm:py-16 bg-gradient-to-r from-orange-100 to-red-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Tương Ớt Bông Ớt
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                        100% tự nhiên, không chất bảo quản, phù hợp khẩu vị người Việt
                    </p>
                    <Link href="/">
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                            Liên hệ đặt hàng
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
