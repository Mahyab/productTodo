import { useAppSelector } from "../../hooks/reduxHook";

useAppSelector
function ProductValue() {
    const totalCount = useAppSelector(({products : {data}}) => {
        // console.log(data);
        
        let count:number = 0;
        for(const product of data) {
            count += Number(product.count);
        }
        return count
    })
    return(
      <>count {totalCount}</>
    )
}
export default ProductValue;