const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          if (VAR_1 == 1) {
            return this;
          }
          var VAR_2 = this.FUNCTION_1(Math.floor(VAR_1 / 2));
          VAR_2 += VAR_2;
          if (VAR_1 % 2) {
            VAR_2 += this;
          }
          return VAR_2;
        };
        "abc".FUNCTION_1(100);
    }
};