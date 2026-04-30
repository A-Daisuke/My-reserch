const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          if (!VAR_3) VAR_3 = " ";
          VAR_4 = 0;
          while (++VAR_4 < VAR_2) {
            VAR_1 = ch + VAR_1;
          }
          return VAR_1;
        }
        function FUNCTION_2(VAR_5, VAR_6, VAR_7) {
          if (!VAR_7) VAR_7 = " ";
          return Array(VAR_6).fill(VAR_7).join("") + VAR_5;
        }
        FUNCTION_2("thing", Math.pow(10, 3));
    }
};