import Header from "@/components/header"

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-screen w-screen bg-gray-50 overflow-hidden flex flex-col">
            <Header />
            <main className="flex-1 overflow-hidden">
                {children}
            </main>
        </div>
    )
}
