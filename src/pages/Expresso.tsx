
import React, { useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { Calendar, Share2, ThumbsUp, MessageSquare } from 'lucide-react';

const Expresso: React.FC = () => {
  useEffect(() => {
    document.title = 'Expresso - EXPRESS';
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "5 Techniques to Overcome Public Speaking Anxiety",
      date: "February 22, 2023",
      excerpt: "Discover proven methods to manage nervousness and deliver confident presentations every time.",
      author: "Alex Morgan",
      readTime: "5 min read",
      likes: 42,
      comments: 8
    },
    {
      id: 2,
      title: "The Art of Persuasive Debate: Structure and Strategy",
      date: "February 15, 2023",
      excerpt: "Learn how to structure your arguments effectively and employ strategic techniques to win debates.",
      author: "Jamie Chen",
      readTime: "8 min read",
      likes: 37,
      comments: 12
    },
    {
      id: 3,
      title: "Voice Modulation: How to Captivate Your Audience",
      date: "February 8, 2023",
      excerpt: "Explore how varying your tone, pitch, and pace can transform your speeches from monotonous to mesmerizing.",
      author: "Taylor Reed",
      readTime: "6 min read",
      likes: 29,
      comments: 5
    },
    {
      id: 4,
      title: "The Power of Storytelling in Public Speaking",
      date: "January 30, 2023",
      excerpt: "Discover how incorporating stories can make your speeches more engaging, memorable, and impactful.",
      author: "Riley Williams",
      readTime: "7 min read",
      likes: 51,
      comments: 9
    },
  ];

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen pt-24 pb-16 px-6 z-10">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-express-purple mb-8 text-center">
            Expresso
          </h1>
          
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Our blog featuring articles, tips, and insights about public speaking, debating, and communication skills.
          </p>
          
          <div className="space-y-8 mt-12">
            {blogPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-black/20 backdrop-blur-sm border border-express-purple/30 rounded-lg p-6 transition-all duration-300 hover:border-express-purple hover:shadow-lg hover:shadow-express-purple/10"
              >
                <h2 className="text-2xl font-semibold text-white mb-2 hover:text-express-purple transition-colors cursor-pointer">
                  {post.title}
                </h2>
                
                <div className="flex items-center text-sm text-gray-400 mt-2 mb-4">
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1 text-express-purple" />
                    {post.date}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                
                <div className="flex justify-between items-center mt-6">
                  <button className="express-button text-xs">
                    READ MORE
                  </button>
                  
                  <div className="flex space-x-4">
                    <button className="flex items-center text-gray-400 hover:text-express-purple">
                      <ThumbsUp size={16} className="mr-1" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center text-gray-400 hover:text-express-purple">
                      <MessageSquare size={16} className="mr-1" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center text-gray-400 hover:text-express-purple">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Expresso;
