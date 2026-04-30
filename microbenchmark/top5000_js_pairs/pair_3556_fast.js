const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_4 = 0,
            VAR_5 = [];
          while (VAR_4 < VAR_1) {
            VAR_5.push("n:" + VAR_4++);
          }
          return VAR_5;
        }
        FUNCTION_1(100);
    }
};