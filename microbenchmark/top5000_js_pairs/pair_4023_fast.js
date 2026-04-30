const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          return new Array(VAR_1 + 1).join(this);
        };
        String.prototype.FUNCTION_2 = function (VAR_2) {
          return --VAR_2 ? this + this.FUNCTION_2(VAR_2) : this;
        };
        "foo".FUNCTION_1(128);
    }
};