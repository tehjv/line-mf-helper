export type AssistCard = {
  details: {
    rarity: CardRarity; // enum val SSR, SR, R
    aura: AuraColor; // enum val Red, Blue, etc.
    type: CardType;
    alias: string;
  };
  basicEffects: FriendBasicEffects | MonsterBasicEffects;
  assistEffects: {
    assistType: string;
    assistValue: string;
    unlockCondition: 0 | 1 | 2 | 3 | 4;
  }[];
};

type BasicEffect = {
  initialBond: number;
};

type FriendBasicEffects = BasicEffect & {
  tournamentBonus: string;
  tournamentPrizeMoney?: string;
  errantryEffect: string;
};

type MonsterBasicEffects = BasicEffect & {
  supportEffect: string;
  specialtyRate: string;
  initialStatGain: number;
  boostedStat: Stat; // not exactly a field in the card
};
