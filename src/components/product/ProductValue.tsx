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
      <div className="bg-custom_blue px-11 py-3 text-end ">
        <div className="">count {totalCount} </div>
      </div>
    )
}
export default ProductValue;