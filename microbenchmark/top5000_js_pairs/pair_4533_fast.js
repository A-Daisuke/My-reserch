const Benchmark = {
    run: function() {
        var VAR_1;
        function FUNCTION_1() {
          if (VAR_1 === undefined) {
            VAR_1 = true;
          }
          return VAR_1;
        }
        if (VAR_1 !== undefined) {
          VAR_1 = true;
        }
        VAR_1 === true;
    }
};