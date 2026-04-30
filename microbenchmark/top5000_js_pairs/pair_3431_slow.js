const Benchmark = {
    run: function() {
        const VAR_1 = Array(100).join(Math.random()).split(".");
        function* FUNCTION_1(VAR_2) {
          for (let VAR_3 = 0; VAR_3 < VAR_1.length; yield VAR_1[VAR_3++]);
        }
        function* FUNCTION_2(VAR_4) {
          for (let VAR_5 of FUNCTION_1(VAR_1)) yield VAR_5 * 2;
        }
        const VAR_6 = [];
        for (const VAR_7 of FUNCTION_2(VAR_1)) {
          VAR_6.push(VAR_7);
        }
    }
};