const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2 % 3);
        }
        function FUNCTION_3(VAR_7) {
          if (VAR_7 === 0) {
            return 1;
          } else if (VAR_7 === 1) {
            return 2;
          } else {
            return 3;
          }
        }
        for (var VAR_6 = 0; VAR_6 < VAR_1.length; VAR_6++) {
          FUNCTION_3(VAR_1[VAR_6]);
        }
    }
};