const Benchmark = {
    run: function() {
        const VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
        }
        function FUNCTION_1(VAR_4) {
          return [].concat(...VAR_4);
        }
        let VAR_3 = FUNCTION_1(VAR_1);
    }
};