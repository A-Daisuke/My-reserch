const Benchmark = {
    run: function() {
        var VAR_1;
        function FUNCTION_1() {
          for (VAR_1 = 0; VAR_1 < 1000000; VAR_1++);
        }
        FUNCTION_1();
    }
};