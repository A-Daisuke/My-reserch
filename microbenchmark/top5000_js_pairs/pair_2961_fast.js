const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return (((VAR_1 * 3) / 5) * 28) % 2;
        }
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) VAR_2.push(VAR_3);
        VAR_4 = VAR_2.slice();
        while ((VAR_3 = VAR_4.pop()) !== undefined) {
          FUNCTION_1(VAR_3);
        }
    }
};