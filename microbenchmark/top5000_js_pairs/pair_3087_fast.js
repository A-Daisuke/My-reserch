const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return Math.floor(Math.random() * (VAR_2 - VAR_1 + 1)) + VAR_1;
        }
        var VAR_3 = [];
        for (VAR_6 = 0; VAR_6 < 1000; VAR_6++) VAR_3.push(FUNCTION_1(0, 1000));
        var VAR_5 = 0;
        VAR_3.forEach(function (VAR_6) {
          VAR_5 += VAR_6;
        });
        console.log(VAR_5);
    }
};