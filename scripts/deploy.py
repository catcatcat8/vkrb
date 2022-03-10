from brownie import CertificatesLogic, NFT, accounts

def main(*args, **kwargs):
    admin = accounts.load('admin')
    nft = NFT.deploy({'from': admin}, publish_source = True)
    certificate = CertificatesLogic.deploy(args[0], args[1], nft, {'from': admin}, publish_source = True)
    nft.grantMinterRole(certificate.address, {'from': admin})