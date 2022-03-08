import brownie

def main(*args, **kwargs):
    nft = brownie.Contract("0x79222fdF61AC484AD1E8465b5c4315ecB11fC3f9")
    certificate = brownie.Contract("0x27633Fb498a5B41c8B235302201659f94cdf5e4b")

    certificate.addLearner(args[0], args[1], {'from': brownie.accounts.load('admin')})