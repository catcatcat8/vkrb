import brownie, json

def main(*args, **kwargs):
    nft_addr = ""
    cert_addr = ""
    with open("/home/lebedev/GitHub/vkrb/build/deployments/map.json", "r") as read_file:
        data = json.load(read_file)
        nft_addr = data["4"]["NFT"][0]
        cert_addr = data["4"]["CertificatesLogic"][0]

    nft = brownie.Contract(nft_addr)
    certificate = brownie.Contract(cert_addr)
    
    certificate.addDescription(args[0], args[1], args[2], args[3], args[4], args[5], {'from': brownie.accounts.load('admin')})