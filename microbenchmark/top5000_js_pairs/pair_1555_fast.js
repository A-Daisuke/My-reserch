const Benchmark = {
    run: function() {
        var VAR_1 = 100;
        function FUNCTION_1() {
          for (var VAR_8 = 0; VAR_8 < VAR_1; ++VAR_8) {
            try {
              window.VAR_4 = Math.random();
              throw new Error("test error");
            } catch (VAR_5) {
              var VAR_6 = VAR_5.stack;
            }
          }
        }
        FUNCTION_1();
    }
};