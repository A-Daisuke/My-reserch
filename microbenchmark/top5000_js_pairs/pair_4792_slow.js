const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = {};
        VAR_1[999] = 1;
        VAR_2[999] = 1;
        function FUNCTION_1(VAR_3) {
          for (var VAR_4 = 0, VAR_5 = VAR_1.length; VAR_4 < VAR_5; VAR_4++) {
            if (VAR_1[VAR_4] == VAR_3) {
              return true;
            }
          }
          return false;
        }
        FUNCTION_1(1);
    }
};