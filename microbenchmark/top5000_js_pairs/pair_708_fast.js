const Benchmark = {
    run: function() {
        let VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(Math.floor(Math.random() * (99999 - 1) + 1));
        }
        function FUNCTION_1(VAR_3) {
          return VAR_3.reduce((VAR_4, VAR_5) => Math.max(VAR_4, VAR_5));
        }
        function FUNCTION_2(VAR_6) {
          return Math.max(...VAR_6);
        }
        FUNCTION_2(VAR_1);
    }
};