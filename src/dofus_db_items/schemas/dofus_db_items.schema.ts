import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type dofusDBItemDocument = HydratedDocument<Items>;

const Langs = {
  de: String,
  en: String,
  es: String,
  fr: String,
  it: String,
  pt: String,
  id: Number
}

@Schema()
export class Items {
  etheral: boolean;
  itemSetId: number;
  criteria: boolean;
  enhanceable: boolean;
  id: number;

  @Prop({ type: Langs, required: true })
  name: {
    de: string;
    en: string;
    es: string;
    fr: string;
    it: string;
    pt: string;
    id: number;
  };
  
  @Prop({ type: String })
  img: string;

  @Prop({ type: Langs })
  description: {
    de: string;
    en: string;
    es: string;
    fr: string;
    it: string;
    pt: string;
    id: number;
  };
  
  @Prop({ type: Object })
  type?: {
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

  @Prop({ type: Object })
  typeId: number;
  @Prop({ type: Object })
  iconId: number;
  @Prop({ type: Object })
  level: number;
  @Prop({ type: Object })
  recipeSlots: number;
  @Prop({ type: [Object] })
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
  @Prop({ type: [Object] })
  effects: {
    _id: string;
    from: number;
    to: number;
    characteristic: number;
    category: number;
    elementId: number;
  }[];
  @Prop({ type: Langs })
  slug: {
    de: string;
    en: string;
    es: string;
    fr: string;
    it: string;
    pt: string;
  };
  _include: string[];
  @Prop({ type: Object })
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

export const DofusDBItemSchema = SchemaFactory.createForClass(Items);
