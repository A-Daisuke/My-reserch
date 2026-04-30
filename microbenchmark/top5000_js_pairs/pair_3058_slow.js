const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          var VAR_2 = this;
          for (var VAR_3 = 1; VAR_3 < VAR_1; VAR_3++) {
            VAR_2 += this;
          }
          return VAR_2;
        };
        "123".FUNCTION_1(1000);
    }
};