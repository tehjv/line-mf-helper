export type AssistCard = {
  details: {
    rarity: CardRarity;
    aura: AuraColor;
    type: CardType;
    alias: string;
  };
  basicEffects: FriendBasicEffects | MonsterBasicEffects;
  tournamentBonus?: string;
  tournamentPrizeMoney?: string;
  errantryEffect?: string;
  assistEffects: {
    auraErrantryUp: string;
  };
};

type FriendBasicEffects = {
  initialBond: number;
  tournamentBonus?: string;
  tournamentPrizeMoney?: string;
  errantryEffect?: string;
};

type MonsterBasicEffects = {
  initialBond: number;
  supportEffect: string;
  specialtyRate: string;
  initialStatGain: number;
  boostedStat: Stat;
};
