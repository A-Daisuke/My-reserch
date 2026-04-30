const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = false;
        function FUNCTION_1(VAR_3) {
          if (VAR_2) {
            console.VAR_2(VAR_3);
          }
        }
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_1.push(VAR_4);
          if (VAR_2) {
            FUNCTION_1("Output:" + VAR_4);
          }
        }
    }
};