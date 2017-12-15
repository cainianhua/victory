export default {
  IMMUTABLE_ITERABLE: "@@__IMMUTABLE_ITERABLE__@@",
  IMMUTABLE_RECORD: "@@__IMMUTABLE_RECORD__@@",
  IMMUTABLE_LIST: "@@__IMMUTABLE_LIST__@@",

  isImmutable(x) {
    return this.isIterable(x) || this.isRecord(x);
  },

  isIterable(x) {
    return !!(x && x[this.IMMUTABLE_ITERABLE]);
  },

  isRecord(x) {
    return !!(x && x[this.IMMUTABLE_RECORD]);
  },

  isList(x) {
    return !!(x && x[this.IMMUTABLE_LIST]);
  }
};
