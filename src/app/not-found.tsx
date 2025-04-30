export const runtime = "edge"

export default function NotFound() {
    return (
        <>
            <title>404</title>
            <main className="container flex flex-col items-center justify-center gap-8">
                <h1 className="text-9xl font-bold">404</h1>
                <p className="text-xl">ページが見つかりません。</p>
            </main>
        </>
    )
}
