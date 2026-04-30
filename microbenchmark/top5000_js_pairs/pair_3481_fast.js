const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_5, VAR_6) {
          VAR_6 |= 0;
          VAR_5 += "";
          if (VAR_6 <= 0 || VAR_5.length == 0) return "";
          if (VAR_6 == 1) return VAR_5;
          if (VAR_6 == 2) return VAR_5 + VAR_5;
          var VAR_7 = "";
          while (VAR_6) {
            if (VAR_6 & 1) VAR_7 += VAR_5;
            VAR_6 >>= 1;
            VAR_5 += VAR_5;
          }
          return VAR_7;
        }
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < 100; VAR_4++) {
          VAR_3.push(FUNCTION_2(0, 5 - VAR_4.toString().length) + VAR_4);
        }
    }
};