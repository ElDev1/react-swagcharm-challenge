type Props = {
    productName: string
    maxQuantity: number
    pack: boolean
    price: number
    packObjects: object
}

const Item = (props: Props) => {
  
    const {productName, maxQuantity, pack, price, packObjects} = props;

    return (
        <div>
            
        </div>
  )
}

export default Item;

