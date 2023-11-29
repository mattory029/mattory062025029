import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Buy,
  Cancel,
  OwnershipTransferred,
  Sell
} from "../generated/Contract/Contract"

export function createBuyEvent(
  orderId: BigInt,
  buyer: Address,
  status: BigInt,
  fee: BigInt,
  updateTime: BigInt
): Buy {
  let buyEvent = changetype<Buy>(newMockEvent())

  buyEvent.parameters = new Array()

  buyEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  buyEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromUnsignedBigInt(status))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam(
      "updateTime",
      ethereum.Value.fromUnsignedBigInt(updateTime)
    )
  )

  return buyEvent
}

export function createCancelEvent(
  orderId: BigInt,
  seller: Address,
  status: BigInt,
  updateTime: BigInt
): Cancel {
  let cancelEvent = changetype<Cancel>(newMockEvent())

  cancelEvent.parameters = new Array()

  cancelEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  cancelEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  cancelEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromUnsignedBigInt(status))
  )
  cancelEvent.parameters.push(
    new ethereum.EventParam(
      "updateTime",
      ethereum.Value.fromUnsignedBigInt(updateTime)
    )
  )

  return cancelEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSellEvent(
  orderId: BigInt,
  seller: Address,
  nft: Address,
  payToken: Address,
  tokenId: BigInt,
  status: BigInt,
  price: BigInt,
  createTime: BigInt
): Sell {
  let sellEvent = changetype<Sell>(newMockEvent())

  sellEvent.parameters = new Array()

  sellEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  sellEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  sellEvent.parameters.push(
    new ethereum.EventParam("nft", ethereum.Value.fromAddress(nft))
  )
  sellEvent.parameters.push(
    new ethereum.EventParam("payToken", ethereum.Value.fromAddress(payToken))
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  sellEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromUnsignedBigInt(status))
  )
  sellEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "createTime",
      ethereum.Value.fromUnsignedBigInt(createTime)
    )
  )

  return sellEvent
}
