const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = true;
        function FUNCTION_1() {
          if (VAR_1 === undefined) {
            VAR_1 = true;
          }
          return VAR_1;
        }
        function FUNCTION_2() {
          return VAR_2;
        }
        if (VAR_1 !== undefined) {
          VAR_1 = true;
        }
        VAR_1 === true;
    }
};