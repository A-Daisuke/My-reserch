const Benchmark = {
    run: function() {
        var VAR_1 = "Alma";
        function FUNCTION_2(VAR_4, VAR_5) {
          if (VAR_5 < 1) return "";
          var VAR_6 = "";
          while (VAR_5 > 0) {
            if (VAR_5 & 1) VAR_6 += VAR_4;
            (VAR_5 >>= 1), (VAR_4 += VAR_4);
          }
          return VAR_6;
        }
        FUNCTION_2(VAR_1, 1000);
    }
};