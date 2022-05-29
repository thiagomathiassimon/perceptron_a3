const maxEpochs = 1000;
const bias = -1;
//taxa de aprendizado
const n = 0.1;
//pesos
let w = [0.0, 0.0, 0.0];

const trainingValues = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 0, 0],
  [1, 1, 1],
];

const perceptron = () => {
  assignsWeight();
};

const assignsWeight = () => {
  w.forEach((weight) => {
    weight = (Math.random(20) + 1) / 10 - 1;
    console.log("weight: ", weight);
  });
};

const run = (value1, value2) => {
  result = net(value1, value2);
  return transferFunction(result);
};

const net = (x1, x2) => {
  const y = bias * w[0] + x1 * w[1] + x2 * w[2];
  console.log(
    "bias: " + bias,
    "w[0]: " + w[0],
    "x1: " + x1,
    "w[1]: " + w[1],
    "x2: " + x2,
    "w[2]: " + w[2]
  );
  console.log("x1: ", x1, "x2: ", x2, "y: ", y);
  return y;
};

const transferFunction = (y) => {
  return y > 0 ? 1 : 0;
};

const toTrain = () => {
  let haveTrained;
  let epoch = 0;
  do {
    haveTrained = true;
    for (let i = 0; i < trainingValues.length; i++) {
      let s = run(trainingValues[i][0], trainingValues[i][1]);
      console.log("trainingValues[i][2]: ", trainingValues[i][2]);
      console.log("s: ", s);
      if (s != trainingValues[i][2]) {
        correctWeight(i, s);
        haveTrained = false;
      }
    }
    epoch++;
  } while (haveTrained === false && epoch < maxEpochs);
  console.log("O algoritmo treinou " + epoch + " épocas.");
  if (haveTrained === false) {
    console.log("O algoritmo não conseguiu convergir.");
  }
  return haveTrained;
};

const correctWeight = (example, out) => {
  w[0] = w[0] + n * (trainingValues[example][2] - out) * bias;
  w[1] = w[1] + n * (trainingValues[example][2] - out) * trainingValues[example][0];
  w[2] = w[2] + n * (trainingValues[example][2] - out) * trainingValues[example][1];
};

const toTest = (value1, value2) => {
  y = run(value1, value2);
  console.log("y: " + y);
	return y;
};

const main = (value1, value2) => {
	perceptron();
  toTrain();
  const response = toTest(value1, value2);
	console.log("response: " + response)
	return response;
};
