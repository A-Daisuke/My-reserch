const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          true === true;
        }
        var VAR_1 = 100000;
        while (VAR_1--) {
          FUNCTION_1();
        }
    }
};