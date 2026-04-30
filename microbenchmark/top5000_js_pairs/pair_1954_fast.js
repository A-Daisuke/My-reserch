const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_7) {
          var VAR_8 = VAR_7 + 100;
        }
        (function VAR_1() {
          var VAR_1 = "hello",
            VAR_2 = "world",
            VAR_3 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            VAR_4 = "hhhhhhhhhhhhhhhhhhhhhhhh";
          for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
            FUNCTION_1(VAR_3);
          }
        })();
    }
};