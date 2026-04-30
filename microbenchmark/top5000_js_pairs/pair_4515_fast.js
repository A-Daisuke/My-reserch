const Benchmark = {
    run: function() {
        var VAR_3;
        function FUNCTION_1() {
          if (VAR_3 === undefined) {
            VAR_3 = true;
          }
          return VAR_3;
        }
        FUNCTION_1() === true;
    }
};