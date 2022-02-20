from brownie import CertificatesLogic, NFT, accounts

def main(*args, **kwargs):
    nft = NFT.deploy({'from': accounts.load('admin')})
    return CertificatesLogic.deploy(args[0], args[1], nft, {'from': accounts.load('admin')})