const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_4, VAR_5, VAR_6) {
          return VAR_6 === 0 ? VAR_4 : FUNCTION_2(VAR_5 + VAR_4, VAR_5, --VAR_6);
        }
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          if (VAR_3 === 0) return VAR_1;
          VAR_1 = VAR_2 + VAR_1;
          return FUNCTION_1(VAR_1, VAR_2, --VAR_3);
        }
        function FUNCTION_3(VAR_8, VAR_9, VAR_10) {
          var VAR_11 = "";
          for (var VAR_12 = 0; VAR_12 < VAR_10; VAR_12++) {
            VAR_11 += VAR_9;
          }
          return VAR_11 + VAR_8;
        }
        FUNCTION_2("a", "x", 1000);
    }
};