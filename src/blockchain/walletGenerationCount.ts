let walletGenerationCount = 0;

export const getWalletGenerationCount = (): number => {
    return walletGenerationCount;
};

export const incrementWalletGenerationCount = (): number => {
    walletGenerationCount++;
    return walletGenerationCount;
};

export const resetWalletGenerationCount = (): void => {
    walletGenerationCount = 0;
}; 