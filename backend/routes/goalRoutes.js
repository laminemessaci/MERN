const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// router.get("/", getGoals);
// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);
// router.post("/", setGoal);
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

module.exports = router;
