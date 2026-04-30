const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1.match(/^[a-z0-9]+$/i) !== null;
        }
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          var VAR_3 = Math.random().toString(36).substring(2);
          FUNCTION_1(VAR_3);
        }
    }
};