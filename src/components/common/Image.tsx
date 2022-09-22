interface Props {
    src: string;
    alt: string;
    className?: string;
}

export const Image = ({ alt, src, className }: Props) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`img${className ? ' ' + className : ''}`}
        />
    );
};