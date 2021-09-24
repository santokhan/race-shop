import styles from './banner.module.css';
export default function Banner() {
    let url = "https://lh3.googleusercontent.com/hFrUycc7CIO26gNfk41_IgLGD3tn7DeLJuOdZJJLv4mEVaPAyE8gG2nYc8a4ar3eThUz9bn2P1YwQ0ybj-Ch54a8n2d5vf97XU1t3jk3SyEMOzCjI3wCzEmhHjzvNCC-8AoK_cQopmo_UQwqq1RGyK4XRregob2OqFqTaT32oNQQCgGMiYFycC8dgf11PRwo79F12jONDmHjkDk9VFR4cu_SkPba3t7ixhgiNe5scaNIMXs6fv7QsH51S2vNrVFPF7XK1suvMNF9ETvvWYH5HIIogothpNOHW87Cgns3XTn7OTFEdp3UcFLiTCou86cjWKidzRxCuTUwqi6YO_mMfV2JcTrChvdQmJpAr-E9DQLPK6rypwg08T7Ytun-q3KLBYZxoAjASnC2_l690dbzRdn_MtACoWbQchY7TjtF_xKITcF3oUchcX9IYhMQzurXTjMLtAndQRf2cE24COQ1bBX7kqgcnhQMVpZgTRtNyW2eNSs7cCC0u-QzZPS-NLrhA6Kroedy84JWiDL1k1wSygD7XPgqUKe6m6-VzdYo7uOdj6Xv4-GKBqfSzIx1IOud4X5j-m9vxmeffkfh_0VB2Ex28k5dSE-7A7ClHEDL81cRQYu1n7AnGWrGoPpFa1Qi2LNMVASOA-OqQeOflzgZBhuTTFZMwY5_m3uq5gMWuzBdDHRn4grAzkpOQK9MA73JvK1z9myE3H4-TwmZOczzAj8=w1378-h680-no?authuser=3"
    return (
        <div className={styles.banner}>
            <img src={url} alt="banner" width="100%" />
        </div>
    );
}