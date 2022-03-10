// Хай Илюха! Вот типа скриптик который из бч получает ipfs-link сертификата по курсу и адресу пользователя
import { ethers } from "hardhat"
import { nftAddress, certificateAddress } from "./contracts.json"
import { CertificatesLogic__factory, NFT__factory } from '../typechain-types'

async function main() {
  const course = "Math"  // я захардкодил курс который я добавил в блокчейн, по идее наверное с какого-то поля ввода подгружается
  const person = "0xF22a4BF45BBfde23c9EBf64357DFDe96A5aEFad4"  // захардкодил адрес, которому я добавил сертификат по курсу math, по идее через коннект with metamask будем получать

  // Подгружаю контракты
  const certificateFactory: CertificatesLogic__factory = await ethers.getContractFactory("CertificatesLogic")
  const nftFactory: NFT__factory = await ethers.getContractFactory("NFT")
  let accounts = await ethers.getNamedSigners()
  let owner = accounts.owner // my wallet
  let certificate = certificateFactory.attach(certificateAddress)  // получил конкретно объект задеплоенного контракта из json
  let nft = nftFactory.attach(nftAddress) // скорей всего не понадобится, но на всякий

  // Получаю ipfs-link через метод контракта viewCertificateURI
  let certificate_link = await certificate.viewCertificateURI(person, course)
  console.log(certificate_link)
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
