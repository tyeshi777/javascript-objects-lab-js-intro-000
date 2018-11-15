let recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key] : value});
  }
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
  let clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}
function deleteFromObjectByKey(object, key) {
  let newObject = Object.assign({}, object);
  delete object[key];
  return newObject;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}