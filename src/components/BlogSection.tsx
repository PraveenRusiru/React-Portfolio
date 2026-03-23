import { motion } from 'framer-motion';
import { Heart, Share2, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const blogPosts = [
  {
    title: 'Building Scalable React Applications in 2024',
    excerpt: 'Exploring modern patterns and best practices for creating maintainable React codebases that scale with your team.',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    likes: 142,
    comments: 23,
    category: 'Development',
  },
  {
    title: 'The Art of Minimal UI Design',
    excerpt: 'Less is more: How constraint-driven design leads to more intuitive and beautiful user interfaces.',
    date: 'Jan 8, 2024',
    readTime: '6 min read',
    likes: 98,
    comments: 15,
    category: 'Design',
  },
  {
    title: 'TypeScript Tips That Changed My Code',
    excerpt: 'Advanced TypeScript patterns that improved my developer experience and code quality significantly.',
    date: 'Dec 28, 2023',
    readTime: '10 min read',
    likes: 215,
    comments: 42,
    category: 'Development',
  },
];

export const BlogSection = () => {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const handleLike = (index: number) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Latest Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts on development, design, and building digital products.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl gradient-border bg-background transition-all duration-300 hover:glow-purple">
                {/* Article Image */}
                <div className="flex-shrink-0 w-full md:w-48 h-40 md:h-32 rounded-xl bg-gradient-to-br from-muted to-card overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-3xl font-display font-bold text-primary/30">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 text-xs font-medium bg-secondary/20 text-secondary rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleLike(index)}
                        className={`flex items-center gap-1.5 text-sm transition-colors ${
                          likedPosts.has(index) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedPosts.has(index) ? 'fill-current' : ''}`} />
                        {post.likes + (likedPosts.has(index) ? 1 : 0)}
                      </button>
                      <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-secondary transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </button>
                      <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-secondary transition-colors">
                        <Share2 className="w-4 h-4" />
                        Share
                      </button>
                    </div>

                    <Button variant="ghost" size="sm" className="gap-1 text-primary hover:bg-primary/10">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
