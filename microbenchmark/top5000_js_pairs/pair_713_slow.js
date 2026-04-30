const Benchmark = {
    run: function() {
        let VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(Math.floor(Math.random() * (99999 - 1) + 1));
        }
        function FUNCTION_1(VAR_3) {
          return Math.max(...VAR_3);
        }
        function FUNCTION_2(VAR_4) {
          return VAR_1.sort((VAR_5, VAR_6) => VAR_6 - VAR_5)[0];
        }
        FUNCTION_2(VAR_1);
    }
};