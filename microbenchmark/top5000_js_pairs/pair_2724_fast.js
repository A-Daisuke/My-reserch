const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_5, VAR_6) {
          if (VAR_6 < 1) return "";
          var VAR_7 = "";
          while (VAR_6 > 0) {
            if (VAR_6 & 1) VAR_7 += VAR_5;
            (VAR_6 >>= 1), (VAR_5 += VAR_5);
          }
          return VAR_7;
        }
        var VAR_1 = "12345678901234567890123456789012345678901234567890";
        VAR_1 += VAR_1 + VAR_1;
        VAR_1 += VAR_1 + VAR_1;
        VAR_1 += VAR_1 + VAR_1;
        var VAR_3 = "                ";
        var VAR_4 = FUNCTION_1(" ", VAR_1.length);
    }
};