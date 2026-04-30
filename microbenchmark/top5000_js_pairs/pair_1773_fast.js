const Benchmark = {
    run: function() {
        let VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(Math.random() < 0.5);
        function FUNCTION_1() {
          VAR_1.sort((VAR_3, VAR_4) => Number(VAR_3) - Number(VAR_4));
        }
        VAR_1.sort((VAR_7, VAR_8) => (VAR_7 | 0) - (VAR_8 | 0));
    }
};