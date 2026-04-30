const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return {
            KEY_1: 0,
            KEY_2: 0,
          };
        }
        for (var VAR_1 = 0; VAR_1 < 10000; VAR_1++) {
          var VAR_2 = new FUNCTION_1();
          var VAR_3 = VAR_2.KEY_1;
          var VAR_4 = VAR_2.KEY_2;
        }
    }
};