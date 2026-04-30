const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = {};
        VAR_1[999] = 1;
        VAR_2[999] = 1;
        function FUNCTION_1(VAR_3) {
          for (var VAR_6 in VAR_2) {
            if (VAR_2[VAR_6] == 1) {
              return true;
            }
          }
          return false;
        }
        FUNCTION_1(1);
    }
};