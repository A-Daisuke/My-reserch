const Benchmark = {
    run: function() {
        var VAR_1 = {};
        function FUNCTION_1() {
          return this;
        }
        function FUNCTION_2() {
          return VAR_1;
        }
        for (VAR_2 = 0; VAR_2 < 1000000; ++VAR_2) new FUNCTION_2();
    }
};