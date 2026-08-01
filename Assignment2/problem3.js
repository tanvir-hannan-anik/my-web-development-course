function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  } else if (tokensUsed <= 500) {
    return 0;
  } else if (tokensUsed > 500) {
    let extraUsedToken = tokensUsed - 500;
    let perToken = extraUsedToken / 100;
    let tokenPrice = Math.floor(perToken) * 5;
    return tokenPrice;
  }
}
