import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>关于我</h1>
      <section className="mt-5">
        <article>
          <h3 className="font-bold">欢迎访问我的博客</h3>
          <p className="mb-2">
            大家好，我是一名前端工程师，目前正在深入学习
            Next.js，并尝试结合NextUI进行开发。这个博客将成为我记录和分享技术知识、生活点滴以及个人兴趣的自留地。
          </p>
          <h3 className="font-bold">技术分享</h3>
          <p className="mb-2">
            在这里，我会定期分享我在前端开发领域的学习心得、实践经验和技术文章，特别是关于
            Next.js 和 NextUI 的使用心得和案例分析。
          </p>
          <h3 className="font-bold">生活记录</h3>
          <p className="mb-2">
            除了技术内容，我还会记录日常生活中的点滴，分享一些有趣的故事和感悟，希望能给读者带来一些轻松愉快的阅读体验。
          </p>
          <h3 className="font-bold">桌游爱好</h3>
          <p className="mb-2">
            作为一个桌游爱好者，我会分享我喜欢的桌游，并介绍它们的玩法和乐趣。此外，我还计划尝试自己创作桌游，记录创作过程和心得体会，希望能与同样热爱桌游的朋友们交流和探讨。
          </p>
        </article>
      </section>
    </div>
  );
}
