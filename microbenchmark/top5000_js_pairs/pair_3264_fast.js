const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = 0;
          for (; VAR_2 < 5000; VAR_2++) VAR_1[VAR_2];
        }
        const VAR_3 = {};
        FUNCTION_1(VAR_3);
    }
};