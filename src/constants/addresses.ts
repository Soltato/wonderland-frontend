import { Networks } from "./blockchain";

const AVAX_MAINNET = {
    DAO_ADDRESS: "0x6A815735471dbD0F85C51b115B728a247aBe0Cf4",
    MEMO_ADDRESS: "0x63F2f75E0C445F8573979de33361ad545a76B4cb",
    TIME_ADDRESS: "0x7846A8A0D7353950b62bedD3708D5e8ED33866A3",
    MIM_ADDRESS: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    STAKING_ADDRESS: "0x5a615ED575bFeb8136AE4eCfaC3d2015c24BC13B",
    STAKING_HELPER_ADDRESS: "0x66E6DE0CCd97900CaC3E89d57aAc7e256F7E17cD",
    TIME_BONDING_CALC_ADDRESS: "0x8A34ADf9EE493988A774b0055e48197754FC6DA7",
    TREASURY_ADDRESS: "0x4da754C25384cc953b1beF01B7E07b7fF236672d",
    ZAPIN_ADDRESS: "0xc669dC61aF974FdF50758d95306e4083D36f1430",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.AVAX) return AVAX_MAINNET;

    throw Error("Network don't support");
};
