const Benchmark = {
    run: function() {
        var VAR_1 = true;
        function FUNCTION_1() {
          return VAR_1;
        }
        var VAR_2 = 0;
        while (VAR_2++ < 10000) {
          FUNCTION_1() === true;
        }
    }
};