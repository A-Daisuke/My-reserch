const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 < 0) {
            FUNCTION_1();
            throw new Error("cheat");
          }
        }
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          FUNCTION_1.call(null, VAR_2);
        }
    }
};