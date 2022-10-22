import { IProduct } from '../utils/types.ts'
import { useState } from 'preact/hooks'

interface ProductCardProps {
  product: IProduct
}

export default function ProductCard({ product }: ProductCardProps) {
  const [details, setDetails] = useState(false)

  const toggle = () => setDetails((prev) => !prev)

  return (
    <div class="border rounded px-4 py-2 mb-2 flex flex-col justify-center items-center">
      <img src={product.image} alt={product.title} class="w-1/6" />
      <h2 class="font-bold text-lg">{product.title}</h2>
      <p class="font-bold">{product.price}$</p>
      <br/>
      <a class="rounded border py-1 px-2 bg-green-500 text-white" href={`/product/${product.id}`}>Open full</a>
      <br/>
      <button
        onClick={toggle}
        class="rounded border py-1 px-2 bg-blue-500 text-white"
      >
        Toggle Description
      </button>
      {details && <p style={{textAlign: "center"}}>{product.description}</p>}
    </div>
  )
}