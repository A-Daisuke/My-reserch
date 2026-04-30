const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_2 = 10000;
        var VAR_3 = [];
        function FUNCTION_1(VAR_4) {
          if (VAR_3.length >= VAR_1) {
            VAR_3.shift();
          }
          VAR_3.push(VAR_4);
        }
        for (var VAR_5 = 0; VAR_5 < VAR_2; VAR_5++) {
          FUNCTION_1("message");
        }
    }
};