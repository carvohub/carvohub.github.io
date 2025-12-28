const GradientWrapper = ({ children, ...props }) => (
    <div
        {...props}
        className={`relative overflow-hidden my-16 border-t sm:my-28 ${props.className || ""}`}>
        <div className="blur-[100px] absolute inset-0 w-full h-full"
            style={{
                background:
                    "linear-gradient(202.72deg, rgba(99, 102, 241, 0.08) 14.76%, rgba(34, 197, 94, 0.06) 34.37%, rgba(99, 102, 241, 0.04) 86.62%)",
            }}>
        </div>
        <div className="relative">
            {children}
        </div>
    </div>
)

export default GradientWrapper
