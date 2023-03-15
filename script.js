function getRecommendation() {
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const age = parseInt(document.getElementById('age').value);
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const activityLevel = document.getElementById('activity-level').value;

  const bmr = calculateBMR(gender, weight, height, age);
  const tdee = calculateTDEE(bmr, activityLevel);
  const macros = calculateMacros(tdee);

  const result = `Based on your information, your Total Daily Energy Expenditure (TDEE) is approximately ${tdee} calories. To achieve your fitness goals, you should aim for the following macronutrient breakdown:<br><br>Protein: ${macros.protein} grams per day<br>Carbohydrates: ${macros.carbs} grams per day<br>Fat: ${macros.fat} grams per day`;

  document.getElementById('result').innerHTML = result;
}

function calculateBMR(gender, weight, height, age) {
  let bmr;
  if (gender === 'male') {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }
  return bmr;
}

function calculateTDEE(bmr, activityLevel) {
  let tdee;
  switch (activityLevel) {
    case 'sedentary':
      tdee = bmr * 1.2;
      break;
    case 'light':
      tdee = bmr * 1.375;
      break;
    case 'moderate':
      tdee = bmr * 1.55;
      break;
    case 'heavy':
      tdee = bmr * 1.725;
      break;
    case 'extreme':
      tdee = bmr * 1.9;
      break;
  }
  return tdee.toFixed(0);
}

function calculateMacros(tdee) {
  const protein = (0.4 * tdee / 4).toFixed(0);
  const carbs = (0.4 * tdee / 4).toFixed(0);
  const fat = (0.2 * tdee / 9).toFixed(0);
  return { protein, carbs, fat };
}