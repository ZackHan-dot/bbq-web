import { Mail } from "lucide-react";

import { Card } from "@/components/ui/card";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-[440px] p-8 space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Mail size={28} />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">验证邮箱</h1>
          <div className="space-y-2">
            <p className="text-gray-600">验证邮件已发送至您的邮箱</p>
            <p className="text-sm text-gray-500">请查看您的邮箱完成验证</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Page;
