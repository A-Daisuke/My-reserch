const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          eval("var j = 0; for(var i = 0; i < 1000000; ++i) j += i;");
        }
        function FUNCTION_2() {
          var VAR_1 = 0;
          for (var VAR_2 = 0; VAR_2 < 1000000; ++VAR_2) VAR_1 += VAR_2;
        }
        FUNCTION_2();
    }
};