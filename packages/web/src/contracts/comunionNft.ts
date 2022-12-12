import { Contract, BigNumber } from 'ethers'
import { computed } from 'vue'
import { getContract, GetContractArgs, wrapTransaction } from './share'
import { useWalletStore } from '@/stores'

export const ComunionNftAddresses: Record<number, string> = {
  43113: '0xa4d70F85eF3a8472d81Ace7EFC1d1Fa2A58B1270'
}

const abi =
  '[{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"SBTNFTAddressLists","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"getSBTNFTAddressLists","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"setSBTNFTAddressLists","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"setTokenURI","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"bool","name":"_whiteState","type":"bool"}],"name":"setWhiteLists","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteLists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]'

export function useComunionNftContract(
  params: Omit<GetContractArgs, 'abi'> = { addresses: ComunionNftAddresses }
): {
  getContract: () => Contract
  SBTNFTAddressLists: (
    arg0: string,
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[/**  */ string]>
  approve: (
    to: string,
    tokenId: number | BigNumber,
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[]>
  balanceOf: (
    owner: string,
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[/**  */ number | BigNumber]>
  contractURI: (
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[/**  */ string]>
  getApproved: (
    tokenId: number | BigNumber,
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[/**  */ string]>
  getSBTNFTAddressLists: (
    _userAddress: string,
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[/**  */ string]>
  isApprovedForAll: (
    owner: string,
    operator: string,
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[/**  */ any]>
  mint: (
    player: string,
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[/**  */ number | BigNumber]>
  name: (pendingText: string, waitingText: string, overrides?: any) => Promise<[/**  */ string]>
  ownerOf: (
    tokenId: number | BigNumber,
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[/**  */ string]>
  safeTransferFrom: (
    from: string,
    to: string,
    tokenId: number | BigNumber,
    data: string,
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[]>
  setApprovalForAll: (
    operator: string,
    approved: any,
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[]>
  setSBTNFTAddressLists: (
    _userAddress: string,
    _tokenURI: string,
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[]>
  setTokenURI: (
    itemId: number | BigNumber,
    tokenURI: string,
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[/**  */ number | BigNumber]>
  setWhiteLists: (
    _userAddress: string,
    _whiteState: any,
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[]>
  supportsInterface: (
    interfaceId: any,
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[/**  */ any]>
  symbol: (pendingText: string, waitingText: string, overrides?: any) => Promise<[/**  */ string]>
  tokenURI: (
    tokenId: number | BigNumber,
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[/**  */ string]>
  transferFrom: (
    from: string,
    to: string,
    tokenId: number | BigNumber,
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[]>
  whiteLists: (
    arg0: string,
    pendingText: string,
    waitingText: string,
    overrides?: any
  ) => Promise<[/**  */ any]>
} {
  const walletStore = useWalletStore()
  const getContractArgs = computed<GetContractArgs>(() => {
    return {
      abi,
      addresses: ComunionNftAddresses,
      wallet: walletStore.wallet,
      chainId: walletStore.chainId
    }
  })
  return {
    getContract: () => getContract({ ...getContractArgs.value, ...params }),
    SBTNFTAddressLists: wrapTransaction(
      { ...getContractArgs.value, ...params },
      'SBTNFTAddressLists'
    ),
    approve: wrapTransaction({ ...getContractArgs.value, ...params }, 'approve'),
    balanceOf: wrapTransaction({ ...getContractArgs.value, ...params }, 'balanceOf'),
    contractURI: wrapTransaction({ ...getContractArgs.value, ...params }, 'contractURI'),
    getApproved: wrapTransaction({ ...getContractArgs.value, ...params }, 'getApproved'),
    getSBTNFTAddressLists: wrapTransaction(
      { ...getContractArgs.value, ...params },
      'getSBTNFTAddressLists'
    ),
    isApprovedForAll: wrapTransaction({ ...getContractArgs.value, ...params }, 'isApprovedForAll'),
    mint: wrapTransaction({ ...getContractArgs.value, ...params }, 'mint'),
    name: wrapTransaction({ ...getContractArgs.value, ...params }, 'name'),
    ownerOf: wrapTransaction({ ...getContractArgs.value, ...params }, 'ownerOf'),
    safeTransferFrom: wrapTransaction({ ...getContractArgs.value, ...params }, 'safeTransferFrom'),
    setApprovalForAll: wrapTransaction(
      { ...getContractArgs.value, ...params },
      'setApprovalForAll'
    ),
    setSBTNFTAddressLists: wrapTransaction(
      { ...getContractArgs.value, ...params },
      'setSBTNFTAddressLists'
    ),
    setTokenURI: wrapTransaction({ ...getContractArgs.value, ...params }, 'setTokenURI'),
    setWhiteLists: wrapTransaction({ ...getContractArgs.value, ...params }, 'setWhiteLists'),
    supportsInterface: wrapTransaction(
      { ...getContractArgs.value, ...params },
      'supportsInterface'
    ),
    symbol: wrapTransaction({ ...getContractArgs.value, ...params }, 'symbol'),
    tokenURI: wrapTransaction({ ...getContractArgs.value, ...params }, 'tokenURI'),
    transferFrom: wrapTransaction({ ...getContractArgs.value, ...params }, 'transferFrom'),
    whiteLists: wrapTransaction({ ...getContractArgs.value, ...params }, 'whiteLists')
  }
}
