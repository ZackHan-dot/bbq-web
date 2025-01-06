'use client';
import React from 'react';
import { useScroll, useThrottle } from 'ahooks';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NextLink } from '../next-link';
import { PATHS } from '@/constants/path';
import { WEBSITE } from '@/constants';
import { Logo } from '../logo';
import { navItems } from './config';
import Link from 'next/link';
import { Button } from '../ui/button';
import { UserCog } from 'lucide-react';
import { MobileNav } from './mobile-nav';

export const NavBar = () => {
    const scroll = useScroll(() => document);
    const pathname = usePathname();
    const [previousScrollTop, setPreviousScrollTop] = React.useState(0);
    const throttledPreviousScrollTop = useThrottle(previousScrollTop, {
        wait: 500,
    });

    const [isHideHeader, setIsHideHeader] = React.useState(false);
    const throttledIsHideHeader = useThrottle(isHideHeader, { wait: 500 });

    React.useEffect(() => {
        const _top = scroll?.top ?? 0;

        if (_top - throttledPreviousScrollTop < 0) {
            // 向上滚动时，显示导航栏
            setIsHideHeader(false);
        } else {
            setIsHideHeader(true);
        }

        if (_top) {
            setPreviousScrollTop(_top);
        }
    }, [scroll?.top]);

    return (
        <header
            className={cn(
                'w-full sticky top-0 backdrop-blur transition-all border-x-0  flex justify-center z-10',
                throttledPreviousScrollTop > 60 &&
                    'bg-background/50 border-b border-border/50',
                {
                    '-translate-y-20':
                        throttledPreviousScrollTop > 300
                            ? throttledIsHideHeader
                            : false,
                }
            )}
        >
            <div className="flex h-16 w-full items-center p-4 sm:p-8 md:max-w-screen-md 2xl:max-w-screen-xl">
                <NextLink
                    href={PATHS.SITE_HOME}
                    className={cn('mr-4 hidden sm:flex')}
                >
                    <Logo />
                    <span className="ml-2 text-base font-semibold text-primary">
                        {WEBSITE}
                    </span>
                </NextLink>
                <div className="mr-8 hidden h-16 flex-1 items-center justify-end text-base font-medium sm:flex">
                    {navItems.map(el => (
                        <Link
                            href={el.link}
                            key={el.link}
                            className={cn(
                                'font-normal text-sm text-muted-foreground transition-colors px-4 py-2',
                                'hover:font-semibold hover:text-primary ',
                                pathname === el.link &&
                                    'font-semibold text-primary'
                            )}
                        >
                            {el.label}
                        </Link>
                    ))}
                </div>
                <MobileNav />
                <div className="flex flex-1 items-center justify-end gap-2 sm:flex-none">
                    <Link
                        href={PATHS.ADMIN_HOME}
                        target="_blank"
                        rel="nofollow"
                        title="后台管理"
                        aria-label={PATHS.ADMIN_HOME}
                    >
                        <Button
                            variant="outline"
                            size={'icon'}
                            aria-label="后台管理"
                        >
                            <UserCog className="size-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};