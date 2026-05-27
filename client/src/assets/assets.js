import blog_pic_1 from './blog_pic_1.png';
import blog_pic_2 from './blog_pic_2.png';
import blog_pic_3 from './blog_pic_3.png';
import blog_pic_4 from './blog_pic_4.png';
import blog_pic_5 from './blog_pic_5.png';
import blog_pic_6 from './blog_pic_6.png';
import blog_pic_7 from './blog_pic_7.png';
import blog_pic_8 from './blog_pic_8.png';
import blog_pic_9 from './blog_pic_9.png';
import blog_pic_10 from './blog_pic_10.png';

// import facebook_icon from './facebook_icon.svg';
// import googleplus_icon from './googleplus_icon.svg';
// import twitter_icon from './twitter_icon.svg';

import logo from './logo.svg';
import arrow from './arrow.svg';
// import logo_light from './logo_light.svg';

// import blog_icon from './blog_icon.png';

// import add_icon from './add_icon.svg';
// import list_icon from './list_icon.svg';

// import email_icon from './email_icon.png';

// import upload_area from './upload_area.svg';

// iimport user_icon from './user_icon.svg';
// import bin_icon from './bin_icon.svg';

// import comment_icon from './comment_icon.svg';
// import tick_icon from './tick_icon.svg';
import star_icon from './star_icon.svg';
// import cross_icon from './cross_icon.svg';

// import home_icon from './home_icon.svg';

import gradientBackground from './gradientBackground.png';

// import dashboard_icon_1 from './dashboard_icon_1.svg';
// import dashboard_icon_2 from './dashboard_icon_2.svg';
// import dashboard_icon_3 from './dashboard_icon_3.svg';
// import dashboard_icon_4 from './dashboard_icon_4.svg';

export const assets = {
//   facebook_icon,
//   googleplus_icon,
//   twitter_icon,

//   logo,
//   arrow,
//   logo_light,

//   blog_icon,

//   add_icon,
//   list_icon,

//   email_icon,

//   upload_area,

  // user_icon,
//   bin_icon,

//   comment_icon,
//   tick_icon,
//   star_icon,
//   cross_icon,

//   home_icon,

//   gradientBackground,

//   dashboard_icon_1,
//   dashboard_icon_2,
//   dashboard_icon_3,
//   dashboard_icon_4,

  blog_pic_1,
  blog_pic_2,
  blog_pic_3,
  blog_pic_4,
  blog_pic_5,
  blog_pic_6,
  blog_pic_7,
  blog_pic_8,
  blog_pic_9,
  blog_pic_10,
  logo,
  arrow,
  star_icon,
  gradientBackground
};

export const blogCategories = [
  'All',
  'Technology',
  'Startup',
  'Lifestyle',
  'Finance'
];

export const blog_data = [

  {
    _id: "1",
    title: "A detailed step by step guide to manage your lifestyle",
    description:
      "<h1>A Simple Step-by-Step Guide to Managing Your Lifestyle</h1><p>If you're looking to improve your health, boost productivity, and create a balanced life, managing your lifestyle intentionally is key. Here's a short guide to help you take control of your daily habits and overall well-being.</p><h2>1. Assess Your Current Lifestyle</h2><p>Track your habits for a week. Note your energy levels, sleep, diet, and daily routines.</p>",
    image: blog_pic_1,
    category: "Lifestyle",
    author: "Alex Bennett",
    // author_img: user_icon,
    date: Date.now()
  },

  {
    _id: "2",
    title: "How to create an effective startup roadmap or ideas",
    description:
      "<h1>Startup Roadmap Guide</h1><p>Creating a startup roadmap helps turn your idea into a structured business plan. Start with market research, define your audience, validate your product idea, and focus on scalable growth.</p><h2>Planning Matters</h2><p>Successful startups solve real problems with clear execution strategies.</p>",
    image: blog_pic_2,
    category: "Startup",
    author: "Sophia Carter",
    // author_img: user_icon,
    date: Date.now()
  },

  {
    _id: "3",
    title: "Learning new technology to boost your career in software",
    description:
      "<h1>Why Learning New Technology Matters</h1><p>Technology evolves rapidly. Developers who continuously learn modern tools, frameworks, and cloud platforms stay ahead in the software industry.</p><h2>Key Skills</h2><p>Focus on React, Node.js, AI tools, cloud computing, and system design.</p>",
    image: blog_pic_3,
    category: "Technology",
    author: "David Wilson",
    // author_img: user_icon,
    date: Date.now()
  },

  {
    _id: "4",
    title: "Tips for getting the most out of apps and software",
    description:
      "<h1>Improve Your Productivity Using Software</h1><p>Modern applications can save time and improve workflow if used correctly. Learn keyboard shortcuts, automation, and integrations to maximize efficiency.</p><h2>Work Smarter</h2><p>Use productivity tools wisely to streamline your daily tasks.</p>",
    image: blog_pic_4,
    category: "Technology",
    author: "Emma Johnson",
    // author_img: user_icon,
    date: Date.now()
  },

  {
    _id: "5",
    title: "Healthy family activities for a balanced lifestyle",
    description:
      "<h1>Building Strong Family Habits</h1><p>Outdoor activities, healthy routines, and quality family time help create a balanced and positive lifestyle.</p><h2>Stay Connected</h2><p>Spending meaningful time together strengthens relationships and mental health.</p>",
    image: blog_pic_5,
    category: "Lifestyle",
    author: "Olivia Brown",
    // author_img: user_icon,
    date: Date.now()
  },

  {
    _id: "6",
    title: "Business meeting strategies for startup founders",
    description:
      "<h1>Effective Startup Meetings</h1><p>Startup founders should focus on clear communication, measurable goals, and efficient planning during meetings.</p><h2>Leadership Matters</h2><p>Strong leadership and collaboration help startups grow faster.</p>",
    image: blog_pic_6,
    category: "Startup",
    author: "Liam Anderson",
    // author_img: user_icon,
    date: Date.now()
  },

  {
    _id: "7",
    title: "Financial planning and investment strategies for growth",
    description:
      "<h1>Financial Planning Basics</h1><p>Smart financial planning includes budgeting, investing, emergency savings, and long-term wealth management.</p><h2>Investment Tips</h2><p>Diversify investments across SIPs, mutual funds, stocks, and fixed-income assets.</p>",
    image: blog_pic_7,
    category: "Finance",
    author: "Michael Scott",
    // author_img: user_icon,
    date: Date.now()
  },

  {
    _id: "8",
    title: "Using mobile technology for smarter daily management",
    description:
      "<h1>Smartphone Productivity</h1><p>Modern mobile apps help users manage schedules, finances, fitness, and communication more effectively.</p><h2>Stay Organized</h2><p>Use digital calendars, reminders, and productivity tools to simplify life.</p>",
    image: blog_pic_8,
    category: "Technology",
    author: "Daniel Harris",
    // author_img: user_icon,
    date: Date.now()
  },

  {
    _id: "9",
    title: "Top finance habits to achieve long-term success",
    description:
      "<h1>Finance Habits for Success</h1><p>Building strong financial habits early helps create stability and long-term wealth. Budgeting and investing are key.</p><h2>Consistency Wins</h2><p>Small consistent savings and disciplined investing create huge results over time.</p>",
    image: blog_pic_9,
    category: "Finance",
    author: "Sarah Williams",
    // author_img: user_icon,
    date: Date.now()
  },

  {
    _id: "10",
    title: "How modern startups use AI to scale rapidly",
    description:
      "<h1>AI in Startups</h1><p>Artificial Intelligence helps startups automate operations, improve customer experience, and analyze business data faster.</p><h2>Future of Startups</h2><p>AI-driven products and automation are becoming essential for modern business growth.</p>",
    image: blog_pic_10,
    category: "Startup",
    author: "Chris Evans",
    // author_img: user_icon,
    date: Date.now()
  }

];