import { BigNumber, Contract, getDefaultProvider } from "ethers"
import { useEffect, useMemo, useState } from "react"
import ERC20 from 'abi/ERC20.json'
import { useWeb3React } from "@web3-react/core"


const useToken = (address?: string) => {

  const [token, setToken] = useState<Contract | null >(null)
  const [balance, setBal] = useState(BigNumber.from("0"))
  const { account, library } = useWeb3React()

  useEffect( () => {
      const getBalance = async () => {
        if(!account)
          return;
        let newBalance = BigNumber.from("0")
        if(address){
          if(!token){
            const lib = getDefaultProvider("https://bsc-dataseed1.defibit.io")
            const contract = new Contract(address, ERC20.abi, lib)
            setToken( contract )
            newBalance = await contract.balanceOf(account)
          }
          else
            newBalance = await token.balanceOf(account)
        }
        else
          newBalance = (account && library && await library.getBalance(account) || BigNumber.from("0"))
        setBal(newBalance)
      }

      if(address && !token)
        getBalance()
        
      const interval = setInterval(getBalance, 7500)

      return () => {
        clearInterval(interval)
      }
  },[setBal, account, balance, token, library, address])

  return {token, balance}

}

export default useToken