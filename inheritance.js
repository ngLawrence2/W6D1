function inherits(SuperClass, Child) {
  function Surrogate() {}
  Surrogate.prototype = SuperClass.prototype;
  Child.prototype = new Surrogate();
  Child.prototype.constructor = Child;
}
