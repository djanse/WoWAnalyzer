import SPELLS from 'common/SPELLS';

export default [
  /**
   * This consists of spells that are able to be cast while casting. This is
   * primarily used to ignore the below spells when determining whether a 
   * spell cast was cancelled since these do not interrupt casting.
   */
  SPELLS.FIRE_BLAST.id,
  SPELLS.SHIMMER_TALENT.id,
  SPELLS.ICE_FLOES_TALENT.id,
  SPELLS.COMBUSTION.id,
];
