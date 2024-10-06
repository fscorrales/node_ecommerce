import mongoose from 'mongoose'

export interface IQueryProduct {
  name?: string
  description?: string | null
  image?: string | null
  seller_id?: mongoose.Types.ObjectId
}

export interface IProduct {
  name: string
  price: number
  quantity: number
  description?: string | null
  image?: string | null
  seller_id: mongoose.Types.ObjectId
  deactivated_at?: Date
}

export interface IStoredProduct extends IProduct {
  _id: mongoose.Types.ObjectId
}

const productSchema = new mongoose.Schema<IProduct>({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  seller_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  deactivated_at: {
    type: Date,
    required: false
  }
}, {
  versionKey: false
})

export const Products = mongoose.model<IProduct>('products', productSchema)
