const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [];
          while (VAR_1--) {
            VAR_2.push({
              KEY_1: 1,
              KEY_2: "2",
            });
          }
          return VAR_2;
        }
        var VAR_3 = FUNCTION_1(100);
        var VAR_4 = FUNCTION_1(1000);
        var VAR_5 = FUNCTION_1(10000);
        var VAR_6 = FUNCTION_1(100000);
        while (VAR_3.length) {
          VAR_3.shift();
        }
    }
};