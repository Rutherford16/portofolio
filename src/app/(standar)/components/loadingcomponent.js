export default function LoadingComponent() {
    return (
        <>
            <div className="w-full h-2/4 flex flex-col justify-center items-center">
                <div className="rounded-full animate-spin border border-primary opacity-50 h-5 w-5">
                    <div className="rounded-full border-r-4 h-5 w-5" />
                </div>
                Sedang memuat
            </div>
        </>
    )
}