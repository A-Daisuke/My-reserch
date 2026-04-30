const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = "push";
        var VAR_3 = VAR_1.push;
        function FUNCTION_1(VAR_4, VAR_5) {
          VAR_4.call(VAR_1, VAR_5);
          VAR_1.pop();
        }
        function FUNCTION_2(VAR_6, VAR_7) {
          VAR_1[VAR_2](VAR_7);
          VAR_1.pop();
        }
        for (var VAR_8 = 0; VAR_8 < 1000; VAR_8++) {
          FUNCTION_1(VAR_1.push, 1);
        }
        for (var VAR_9 = 0; VAR_8 < 1000; VAR_8++) {
          FUNCTION_1(VAR_1.shift, 2);
        }
    }
};