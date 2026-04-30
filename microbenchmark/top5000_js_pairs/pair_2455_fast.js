const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          VAR_1 = String(VAR_1);
          var VAR_6 = "";
          var VAR_4 = -1;
          if (!VAR_3 && VAR_3 !== 0) VAR_3 = " ";
          VAR_2 = VAR_2 - VAR_1.length;
          while (++VAR_4 < VAR_2) {
            bar: VAR_6 = VAR_6 + VAR_3;
          }
          return VAR_6 + VAR_1;
        }
        for (var VAR_5 = 0; VAR_5 < 10000; VAR_5++) {
          FUNCTION_1("str", 4, " ");
        }
    }
};