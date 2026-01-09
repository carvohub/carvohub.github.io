const TopRibbon = () => {
    return (
        <div className="bg-blue-600 dark:bg-blue-700 text-white py-2 text-center text-sm">
            <div className="custom-screen flex items-center justify-center gap-2">
                <span className="hidden sm:inline">✨</span>
                <span>
                    <strong>New:</strong> Try our free{" "}
                    <a
                        href="#"
                        className="underline font-semibold hover:text-blue-100 transition-colors"
                    >
                        Carvohub Garage Manager
                    </a>
                    {" "}app - manage your cars and get higher resale values
                </span>
                <span className="hidden sm:inline">✨</span>
            </div>
        </div>
    )
}

export default TopRibbon
