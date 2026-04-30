const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_1 = [];
          for (var VAR_2 = 0; VAR_2 < 500; VAR_2++) {
            VAR_1.push("abc");
          }
          var VAR_3 = VAR_1.join(";");
        }
        FUNCTION_1();
    }
};