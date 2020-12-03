Date.prototype.ToUTC = function() {
  return new Date(
    Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()),
  );
};
