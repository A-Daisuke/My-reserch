const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3, VAR_4, VAR_5) {
          var VAR_6 = 0;
          if (VAR_2.length == VAR_1) {
            if (VAR_5) VAR_5(VAR_2);
            return 1;
          }
          for (var VAR_7 = 0; VAR_7 < VAR_4.length; VAR_7++) {
            VAR_2.push(VAR_4[VAR_7]);
            VAR_6 += FUNCTION_1(VAR_1, VAR_2, VAR_7, VAR_4, VAR_5);
            VAR_2.pop();
          }
          return VAR_6;
        }
        FUNCTION_1(5, [], 0, ["a", "b", "c", "d", "e"]);
    }
};