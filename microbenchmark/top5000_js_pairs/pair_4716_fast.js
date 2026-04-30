const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1.push(Math.random());
        }
        var VAR_3 = 0;
        function FUNCTION_1(VAR_4) {
          return VAR_4 * VAR_4;
        }
        VAR_3 = VAR_1.reduce((VAR_6, VAR_7, VAR_8, VAR_9) => VAR_6 + VAR_7 * VAR_7, 0);
    }
};