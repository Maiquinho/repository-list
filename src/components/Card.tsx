import { ReactNode } from 'react';

interface Card {
    children: ReactNode;
    className?: string | null;
}

export function AsideCard({ children, className }: Card){
    return(
        <div 
            className={`bg-purple-700 rounded-2xl py-7 px-10${(className != null) ? ' ' + className : '' }`}
        > 
        
            {children} 

        </div>
    )
}