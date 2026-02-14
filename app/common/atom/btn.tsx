import { Button } from "@/components/ui/button"

type CenteredCTAProps = {
    label: string
    onClick?: () => void
    className?: string
    buttonClassName?: string
}

export function CenteredCTA({
    label,
    onClick,
    className = "",
    buttonClassName = "",
}: CenteredCTAProps) {
    return (
        <div className={`flex justify-center mt-8 ${className}`}>
            <Button
                onClick={onClick}
                className={`bg-primary-orange text-sm btn-text py-6 px-8 ${buttonClassName}`}
            >
                {label}
            </Button>
        </div>
    )
}
