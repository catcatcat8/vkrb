import { extendEnvironment } from 'hardhat/config'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const SNAPSHOT = 'evm_snapshot'
const REVERT = 'evm_revert'
const INCREASE_TIME = 'evm_increaseTime'
const MINE = 'evm_mine'

export type Snapshot = string

export class TimePlugin {
  hre: HardhatRuntimeEnvironment

  methods = {
    SNAPSHOT,
    REVERT,
    INCREASE_TIME,
    MINE,
  }

  constructor(hre: HardhatRuntimeEnvironment) {
    this.hre = hre
  }
  /**
   * Snapshot the state of the blockchain at the current block. Takes no parameters.
   *
   * @returns the integer id of the snapshot created.
   */
  async snapshot(): Promise<Snapshot> {
    return await this.hre.network.provider.send(this.methods.SNAPSHOT)
  }

  /**
   * Revert the state of the blockchain to a previous snapshot.
   * Takes a single parameter, which is the snapshot id to revert to.
   * If no snapshot id is passed it will revert to the latest snapshot.
   *
   * @param snapId
   *
   * @returns true
   */
  async revert(snapId: Snapshot): Promise<boolean> {
    return await this.hre.network.provider.send(this.methods.REVERT, [snapId])
  }

  /**
   * Jump forward in time.
   * Takes one parameter, which is the amount of time to increase in seconds.
   *
   * @param seconds
   * @param mine should function mine current block.
   * If true mines the current block, so time will be already changed after awaiting this function
   * @retruns the total time adjustment, in seconds.
   */
  async increaseTime(seconds: number, mine = true): Promise<number> {
    const timeAdded = await this.hre.network.provider.send(this.methods.INCREASE_TIME, [
      seconds,
    ])
    if (mine) {
      await this.mine()
    }
    return timeAdded
  }

  /**
   * Returns block timestamp. Takes optional parameter which is number of block
   * 
   * @param blockNumber the block number from which timestamp should be retrieved
   * @returns timestamp of provided block or latest block timestamp if blockNumber wasn't provided.
   */
  async getBlockTimestamp(blockNumber?: number): Promise<number> {
    if (!blockNumber) {
      blockNumber = await this.hre.ethers.provider.getBlockNumber()
    }
    return (await this.hre.ethers.provider.getBlock(blockNumber)).timestamp
  }

  /**
   * Force a block to be mined. Takes no parameters.
   * Mines a block independent of whether or not mining is started or stopped.
   */
  async mine() {
    await this.hre.network.provider.send(this.methods.MINE)
  }
}

declare module 'hardhat/types/runtime' {
  export interface HardhatRuntimeEnvironment {
    time: TimePlugin
  }
}

extendEnvironment((hre) => {
  hre.time = new TimePlugin(hre)
})
