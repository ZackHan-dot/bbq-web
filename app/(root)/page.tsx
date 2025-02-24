import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Page() {
  const categories = [
    { name: "技术开发", count: 42 },
    { name: "生活随笔", count: 28 },
    { name: "读书笔记", count: 15 },
    { name: "产品设计", count: 23 },
    { name: "工作心得", count: 19 },
    { name: "学习总结", count: 31 },
  ];

  const posts = [
    {
      title: "深入理解 React 18 新特性与最佳实践",
      category: "技术开发",
      date: "2024-02-15",
      readTime: "8 分钟",
      excerpt:
        "本文详细探讨了 React 18 带来的重要更新，包括并发渲染、自动批处理等特性，以及如何在实际项目中最优使用这些新功能。",
      image:
        "https://ai-public.mastergo.com/ai/img_res/c5c269db4c9b063d3d528b45e00a5552.jpg",
    },
    {
      title: "TypeScript 高级类型系统详解",
      category: "技术开发",
      date: "2024-02-13",
      readTime: "12 分钟",
      excerpt:
        "深入剖析 TypeScript 类型系统的高级特性，包括条件类型、映射类型、类型推断等核心概念的实践应用。",
      image:
        "https://ai-public.mastergo.com/ai/img_res/027bdd6fe6502863e19ef5c89da66c11.jpg",
    },
    {
      title: "现代前端工程化实践指南",
      category: "技术开发",
      date: "2024-02-10",
      readTime: "15 分钟",
      excerpt:
        "探讨现代前端开发中的工程化实践，包括构建工具、自动化测试、CI/CD 流程等关键环节的最佳实践。",
      image:
        "https://ai-public.mastergo.com/ai/img_res/6160d068f34df7a0737eecd3224ea75b.jpg",
    },
  ];

  const popularPosts = [
    "Docker 容器化部署实战指南",
    "前端性能优化的 20 个关键点",
    "微服务架构设计模式解析",
    "云原生应用开发实践",
    "前端安全防护最佳实践",
  ];

  return (
    <div className="md:max-w-screen-md 2xl:max-w-screen-xl mx-auto bg-white">
      {/* 主要内容区 */}
      <main className="pt-24 px-8 flex">
        {/* 左侧主要内容 */}
        <div className="w-3/4 pr-8">
          {/* 分类导航 */}
          <ScrollArea className="w-full whitespace-nowrap mb-8">
            <div className="flex space-x-2 p-2">
              {categories.map((category) => (
                <Badge
                  key={category.name}
                  variant="secondary"
                  className="py-2 px-4 cursor-pointer hover:bg-blue-100"
                >
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>
          </ScrollArea>

          {/* 文章列表 */}
          <div className="grid grid-cols-2 gap-6">
            {posts.map((post) => (
              <Card
                key={post.title}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-[250px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 右侧边栏 */}
        <div className="w-1/4">
          {/* 热门文章 */}
          <Card className="mb-8">
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">热门文章</h3>
              <ul className="space-y-4">
                {popularPosts.map((title) => (
                  <li key={title} className="flex items-center space-x-2">
                    <i className="fas fa-fire text-orange-500"></i>
                    <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
                      {title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* 订阅区域 */}
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">订阅更新</h3>
              <p className="text-gray-600 mb-4">
                订阅我的技术文章，及时获取最新内容推送
              </p>
              <div className="space-y-4">
                <Input
                  placeholder="请输入您的邮箱"
                  className="w-full border-gray-200"
                />
                <Button className="w-full !rounded-button">
                  <i className="fas fa-paper-plane mr-2"></i>
                  订阅
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
