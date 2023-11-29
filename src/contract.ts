import {
  Buy as BuyEvent,
  Cancel as CancelEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Sell as SellEvent
} from "../generated/Contract/Contract"
import { Buy, Cancel, OwnershipTransferred, Sell } from "../generated/schema"

export function handleBuy(event: BuyEvent): void {
  let entity = new Buy(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.orderId = event.params.orderId
  entity.buyer = event.params.buyer
  entity.status = event.params.status
  entity.fee = event.params.fee
  entity.updateTime = event.params.updateTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCancel(event: CancelEvent): void {
  let entity = new Cancel(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.seller = event.params.seller
  entity.status = event.params.status
  entity.updateTime = event.params.updateTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSell(event: SellEvent): void {
  let entity = new Sell(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.seller = event.params.seller
  entity.nft = event.params.nft
  entity.payToken = event.params.payToken
  entity.tokenId = event.params.tokenId
  entity.status = event.params.status
  entity.price = event.params.price
  entity.createTime = event.params.createTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
