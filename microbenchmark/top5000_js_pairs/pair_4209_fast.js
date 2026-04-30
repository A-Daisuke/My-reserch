const Benchmark = {
    run: function() {
        var VAR_1 = "Alma";
        String.prototype.FUNCTION_1 = function (VAR_2) {
          if (VAR_2 < 1) return "";
          var VAR_3 = "",
            VAR_4 = this.valueOf();
          while (VAR_2 > 0) {
            if (VAR_2 & 1) VAR_3 += VAR_4;
            (VAR_2 >>= 1), (VAR_4 += VAR_4);
          }
          return VAR_3;
        };
        VAR_1.FUNCTION_1(1000);
    }
};