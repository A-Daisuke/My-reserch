const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_1;
          for (VAR_1 = 0; VAR_1 < 1000000; VAR_1++);
        }
        FUNCTION_1();
    }
};