
const ShowCurrentConversion = (props) => {
    const a = props.responseFromCurrency.data
    const b = props.responseToCurrency.data
    
    return (
      <div>  
           You converted from {a.base_code} into {b.base_code}
     </div>
    )
}

export default ShowCurrentConversion