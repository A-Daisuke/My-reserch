const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [],
            VAR_3;
          for (VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            VAR_2.push(VAR_3);
          }
        }
        FUNCTION_1(1000000);
    }
};