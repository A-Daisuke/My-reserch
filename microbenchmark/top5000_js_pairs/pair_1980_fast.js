const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          let VAR_2 = "";
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            VAR_2 = VAR_2 + this;
          }
          return VAR_2;
        };
        "james".FUNCTION_1(10000);
    }
};