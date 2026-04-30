const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return 10 + Math.random() * 2;
        }
        function FUNCTION_2(VAR_1) {
          function FUNCTION_3(VAR_2) {
            if (VAR_2 === VAR_1) return;
            FUNCTION_1();
            FUNCTION_3(VAR_2 + 1);
          }
          FUNCTION_3(0, VAR_1);
        }
        FUNCTION_2(10000);
    }
};