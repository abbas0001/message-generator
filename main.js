// returns and index from and array
const getRandomIndex = arr => {
  return Math.floor(Math.random() * arr.length);
};

// creates and returns and object of message type
const messageFactory = (subject, verb, object) => {
  return {
    subject: subject,
    verb: verb,
    object: object
  };
};

// choose random message sentence
const getRandomMessageIndex = arr => {
  return getRandomIndex(arr);
};

// generate the random message
const generateRandomMessage = obj => {
  let message = '';
  let subjectIndex = getRandomIndex(obj.subject);
  let verbIndex = getRandomIndex(obj.verb);
  let objectIndex = getRandomIndex(obj.object);
  let subject = obj.subject[subjectIndex];
  let verb = obj.verb[verbIndex];
  let object = obj.object[objectIndex];
  if (subject === 'he' || subject === 'she') {
    if (verb !== 'can' && verb !== 'will') {
      verb += 's';
    }
  }
  message = `${subject} ${verb} ${object}`;
  return message;
};

const object = ['i', 'you', 'he', 'she', 'we']

const subject1 = object;
const verb1 = ['like', 'love'];
const object1 = ['spaghetti', 'cars', 'games'];
const message1 = messageFactory(subject1, verb1, object1);

const subject2 = object;
const verb2 = ['can', 'will'];
const object2 = ['go', 'be great', 'be fabulous', 'do'];
const message2 = messageFactory(subject2, verb2, object2);

const messages = [message1, message2];
const messageIndex = getRandomMessageIndex(messages);
const randomMessage = generateRandomMessage(messages[messageIndex]);
console.log(randomMessage);