const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_1 = "";
          for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
            VAR_1 = VAR_2 + VAR_1;
          }
          return VAR_1.charCodeAt(0) + VAR_1.charCodeAt(VAR_1.length - 1);
        }
        FUNCTION_1();
    }
};