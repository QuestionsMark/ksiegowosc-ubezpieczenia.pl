interface Props {
    children: string;
    className?: string;
}

export const Text = ({ children, className }: Props) => {
    return (
        <p className={`text${className ? ' ' + className : ''}`}>{children}</p>
    );
};