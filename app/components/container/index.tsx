import { ReactNode } from "react";

export function Container({children}: {children: ReactNode}) {
    return(
        <div className=" mx-4 md:mx-8 xl:mx-31 flex flex-col items-center " >
            {children}
        </div>
    )
}