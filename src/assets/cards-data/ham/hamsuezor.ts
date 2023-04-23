import { AssistCard } from 'src/app/models/assist-card.model';

export const hamsuezor: AssistCard = {
  details: {
    rarity: CardRarity.R,
    aura: AuraColor.YELLOW,
    type: CardType.SKI,
    alias: 'Yotsumin',
  },
  basicEffects: {
    initialBond: 1,
    supportEffect: '10%',
    specialtyRate: '5%',
    initialStatGain: 1,
    boostedStat: Stat.SKI,
  },
  assistEffects: [
    { assistType: 'Main Breed Bonus', assistValue: '5%', unlockCondition: 0 },
    { assistType: 'Training Effect Up', assistValue: '5%', unlockCondition: 0 },
    { assistType: 'Loyalty Effect Up', assistValue: '6%', unlockCondition: 0 },
    { assistType: 'Aura Errantry Up', assistValue: '10%', unlockCondition: 1 },
    { assistType: 'Training Effect Up', assistValue: '5%', unlockCondition: 2 },
    { assistType: 'Loyalty Effect Up', assistValue: '3%', unlockCondition: 3 },
    { assistType: 'Loyalty Effect Up', assistValue: '10%', unlockCondition: 3 },
  ],
};
