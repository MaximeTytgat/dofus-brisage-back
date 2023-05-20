export interface DofusDBItem {
  _id: string;
  etheral: boolean;
  itemSetId: number;
  criteria: boolean;
  enhanceable: boolean;
  id: number;
  name: {
    de: string;
    en: string;
    es: string;
    fr: string;
    it: string;
    pt: string;
    id: number;
  };
  typeId: number;
  description: {
    de: string;
    en: string;
    es: string;
    fr: string;
    it: string;
    pt: string;
    id: number;
  };
  iconId: number;
  level: number;
  recipeSlots: number;
  possibleEffects: {
    _id: string;
    targetMask: string;
    diceNum: number;
    visibleInBuffUi: boolean;
    baseEffectId: number;
    visibleInFightLog: boolean;
    targetId: number;
    effectElement: number;
    effectUid: number;
    dispellable: number;
    triggers: string;
    spellId: number;
    duration: number;
    random: number;
    effectId: number;
    delay: number;
    diceSide: number;
    visibleOnTerrain: boolean;
    visibleInTooltip: boolean;
    rawZone: string;
    forClientOnly: boolean;
    value: number;
    order: number;
    group: number;
  }[];
  effects: {
    _id: string;
    from: number;
    to: number;
    characteristic: number;
    category: number;
    elementId: number;
  }[];
  slug: {
    de: string;
    en: string;
    es: string;
    fr: string;
    it: string;
    pt: string;
  };
  img: string;
  _include: string[];
  type?: {
    _id: string;
    id: number;
    name: {
      de: string;
      en: string;
      es: string;
      fr: string;
      it: string;
      pt: string;
      id: number;
    };
    superTypeId: number;
    _include: string[];
    superType?: {
      _id: string;
      positions: number[];
      id: number;
      name: {
        fr: string;
        en: string;
        de: string;
        es: string;
        it: string;
        pt: string;
      };
      createdAt: string;
      updatedAt: string;
      __v: 0
    }
  };
  itemSet?: {
    _id: string;
    id: number;
    name: {
      de: string;
      en: string;
      es: string;
      fr: string;
      it: string;
      pt: string;
      id: number;
    }
  }
}
