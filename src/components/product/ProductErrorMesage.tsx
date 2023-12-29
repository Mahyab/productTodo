export default function ProductErrorMessage({errorMessage}:string) {
    
    return(
        <div className="font-bold text-xl w-full mx-3 my-2  text-custom_orange">
            <span>{errorMessage}</span>
        </div>
    )
}