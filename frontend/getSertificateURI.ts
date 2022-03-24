import { ethers } from "ethers";
import { NFT, CertificatesLogic } from "../typechain-types";

import Nft from "./NFT.json";
import Certficates from "./CertificatesLogic.json";

const NftAbi = Nft.abi;
const CertficatesAbi = Certficates.abi;

const NftAddr = Nft.address;
const CertficatesAddr = Certficates.address;

const bsc_RPC = "https://data-seed-prebsc-1-s1.binance.org:8545";
const provider = new ethers.providers.JsonRpcProvider(bsc_RPC);

async function main(_account: string, _courseName: string) {
  const CertficateContract = new ethers.Contract(
    CertficatesAddr,
    CertficatesAbi,
    provider
  ) as CertificatesLogic;

  let certificateUri: string = await CertficateContract.viewCertificateURI(
    _account,
    _courseName
  );
  console.log(certificateUri);
}

main(process.argv[2], process.argv[3])
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
