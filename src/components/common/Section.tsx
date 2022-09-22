import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    title: string;
    className?: string;
}

export const Section = ({ children, title, className }: Props) => {
    return (
        <section className={`main__section${className ? ' ' + className : ''}`}>
            <h2 className="main__title">{title}</h2>
            {children}
        </section>
    );
};