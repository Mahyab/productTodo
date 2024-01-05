import classNames from "classnames";
import React from "react";
type TSkeletonProp = {
    times:number,
    className?:string
}
const UserSkeleton :React.FC<TSkeletonProp> = ({times ,className}) => {
    const outerClassNames = classNames(
        'relative',
        'overflow-hidden',
        'bg-gray',
        'rounded-custom_border_radius',
        'mb-2.5',
        className
    );
    const innerClassNames = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray',
        'via-white',
        'to-gray',
        className
    );
    const boxes = Array(times).fill(0).map((_,i:number) => {
        return <div key={i} className={outerClassNames}>
             <div className={innerClassNames}>
             </div>
        </div>
    })
    return boxes
}
export default UserSkeleton; 