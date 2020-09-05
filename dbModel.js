import mongoose from "mongoose";

const jungianSchema = mongoose.Schema({
  id: String,
  archetypeName: String,
  example: String,
  archetypeMotto: String,
  archetypeDesire: Object,
  archetypeGoal: String,
  archetypeFear: Object,
  archetypeStrategy: Object,
  archetypeWeakness: Object,
  archetypeTalent: Object,
  archetypeOtherName: Object,
  cardinalOrientation: String,
});
// Collection inside the database
export default mongoose.model("jungianProfile", jungianSchema);
