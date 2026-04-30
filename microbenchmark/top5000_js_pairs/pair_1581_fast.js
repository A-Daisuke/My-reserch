const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_1() {
          return parseInt(Math.random() * VAR_1.length);
        }
        function FUNCTION_2() {
          return VAR_1[FUNCTION_1()];
        }
        while (VAR_1.length) {
          VAR_1.splice(FUNCTION_1(), 1);
          VAR_1 = VAR_1.concat([]);
        }
    }
};