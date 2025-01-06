import { Button } from '@/components/ui/button';
import { PATHS } from '@/constants/path';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="grid h-screen place-items-center">
            <div className="grid gap-8">
                <h3 className="text-center text-2xl font-semibold tracking-tight">
                    页面未找到
                </h3>
                <Button asChild>
                    <Link href={PATHS.SITE_HOME}>返回首页</Link>
                </Button>
            </div>
        </div>
    );
}
