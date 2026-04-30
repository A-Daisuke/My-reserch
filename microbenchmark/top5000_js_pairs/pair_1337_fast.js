const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          VAR_1 = String(VAR_1);
          var VAR_5 = "";
          var VAR_6 = -1;
          if (!VAR_3 && VAR_3 !== 0) VAR_3 = " ";
          VAR_2 = VAR_2 - VAR_1.length;
          while (++VAR_6 < VAR_2) {
            bar: VAR_5 = VAR_5 + VAR_3;
          }
          return VAR_5 + VAR_1;
        }
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          FUNCTION_1("str", 4, " ");
        }
    }
};