import { ReactNode } from 'react';

interface Card {
    children: ReactNode;
    className?: string | null;
}

export function AsideCard({ children, className }: Card){

    const defaultAsideCardStyle = "bg-purple-700 rounded-2xl py-7 px-10 shadow-md";

    return(
        <div 
            className={ 
                (className != null) ? 
                defaultAsideCardStyle + ' ' + className : 
                defaultAsideCardStyle 
            }
        > 
        
            {children} 

        </div>
    )
}