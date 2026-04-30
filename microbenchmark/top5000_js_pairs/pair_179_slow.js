const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = "";
          var VAR_3 = 0;
          for (var VAR_4 = 0; VAR_4 < VAR_1; VAR_4++) {
            VAR_3 = VAR_1 - 1 - VAR_4;
            for (var VAR_5 = 0; VAR_5 < VAR_3 + 2; VAR_5++) {
              if (VAR_5 == VAR_3 + 1) VAR_2 += "#";
              VAR_2 += " ";
            }
            for (var VAR_6 = 0; VAR_6 < VAR_4 + 1; VAR_6++) {
              VAR_2 += "#";
            }
            VAR_2 += "\n";
          }
          return VAR_2;
        }
        for (var VAR_7 = 0; VAR_7 < 200; VAR_7++) FUNCTION_1(VAR_7);
    }
};