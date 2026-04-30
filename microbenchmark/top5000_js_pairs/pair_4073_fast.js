const Benchmark = {
    run: function() {
        var VAR_1 = "Alma";
        function FUNCTION_2(VAR_3, VAR_4) {
          if (VAR_4 < 1) return "";
          var VAR_5 = "";
          while (VAR_4 > 0) {
            if (VAR_4 & 1) VAR_5 += VAR_3;
            (VAR_4 >>= 1), (VAR_3 += VAR_3);
          }
          return VAR_5;
        }
        FUNCTION_2(VAR_1, 1000);
    }
};