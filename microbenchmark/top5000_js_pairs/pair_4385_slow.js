const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          var VAR_2 = "";
          for (; --VAR_1; ) {
            VAR_2 += this;
          }
          return VAR_2;
        };
        "abc".FUNCTION_1(100);
    }
};