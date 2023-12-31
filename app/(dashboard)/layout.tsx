import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {

    const apiLimitCount = await getApiLimitCount()

    return (
        <div className="h-full relative">
            <div className="hidden md:flex md:w-72 h-full md:flex-col md:fixed md:inset-y-0 bg-gray-900">
                <Sidebar apiLimitCount={apiLimitCount} />
            </div>

            <main className="md:ml-72 p-2">
                <Navbar />
                { children }
            </main>

        </div>
    )
}