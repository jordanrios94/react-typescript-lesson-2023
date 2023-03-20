interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>Click Me</button>
    </div>;
}


export const ChildAsFC: React.FC<ChildProps> = ({ color, children, onClick }) => {
    return <div>
        {color}
        {children}
        <button onClick={onClick}>Click Me</button>
    </div> ;
}