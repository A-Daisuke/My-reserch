const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function str_repeat(VAR_1) {
          var VAR_2 = "";
          if (VAR_1 < 0) {
            return this;
          }
          for (var VAR_3 = 0; VAR_3 < VAR_1; ++VAR_3) {
            VAR_2 += this;
          }
          return VAR_2;
        };
        var VAR_4 = "bar ".FUNCTION_1(1500);
        console.log(VAR_4);
    }
};