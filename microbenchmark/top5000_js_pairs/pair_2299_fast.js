const Benchmark = {
    run: function() {
        let VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(Math.floor(Math.random() * (99999 - 1) + 1));
        }
        function FUNCTION_1(VAR_3) {
          return Math.max(...VAR_3);
        }
        function FUNCTION_2(VAR_6) {
          return VAR_1.sort((VAR_7, VAR_8) => VAR_8 - VAR_7)[0];
        }
        FUNCTION_1(VAR_1);
    }
};