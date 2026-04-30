const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_2 < 1) return "";
          var VAR_3 = "";
          while (VAR_2 > 0) {
            if (VAR_2 & 1) VAR_3 += VAR_1;
            (VAR_2 >>= 1), (VAR_1 += VAR_1);
          }
          return VAR_3;
        }
        var VAR_4 = "12345678901234567890123456789012345678901234567890";
        VAR_4 += VAR_4 + VAR_4;
        VAR_4 += VAR_4 + VAR_4;
        VAR_4 += VAR_4 + VAR_4;
        var VAR_5 = new Array(256 + 1).join(" ");
        var VAR_6 = "                ";
        var VAR_7 = new Array(VAR_4.length + 1).join(" ");
    }
};