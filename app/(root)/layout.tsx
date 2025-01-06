import { BackToTop } from '@/components/back-to-top';
import { NavBar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer';

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <>
            <NavBar />
            <main className="min-h-[calc(100vh-190px)]">{children}</main>
            <Footer />
            <BackToTop />
        </>
    );
}
