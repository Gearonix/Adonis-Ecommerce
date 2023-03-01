import {FC} from 'react'
import {CartItemsProps as CartItemsEntity} from 'entities/Cart/ui/CartItems/CartItems'
import {SearchedProduct} from 'shared/ui/kit'
import {CartButton} from 'features/ProductPage/BuyProduct'

const ProfileSaved: FC<CartItemsEntity> = ({items, AddToSaved}) => {
  console.log(items)
  return <>{items.map((product) => <SearchedProduct AddToSaved={AddToSaved}
    CartButton={CartButton} product={product} key={product.productId}/>)}</>
}


export default ProfileSaved