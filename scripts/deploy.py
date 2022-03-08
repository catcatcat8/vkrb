from brownie import CertificatesLogic, NFT, accounts

def main(*args, **kwargs):
    nft = NFT.deploy({'from': accounts.load('admin')}, publish_source = True)
    certificate = CertificatesLogic.deploy(args[0], args[1], nft, {'from': accounts.load('admin')}, publish_source = True)