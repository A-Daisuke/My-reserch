const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          if (VAR_1 > 1) {
            return this + this.FUNCTION_1(VAR_1 - 1);
          } else {
            return this;
          }
        };
        "123".FUNCTION_1(1000);
    }
};