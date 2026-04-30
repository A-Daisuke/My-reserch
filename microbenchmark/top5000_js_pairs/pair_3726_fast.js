const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          for (let VAR_3 = 0; VAR_3 < VAR_2; VAR_3++) {
            VAR_1.push(Math.random());
          }
        }
        const VAR_4 = [];
        const VAR_5 = [];
        FUNCTION_1(VAR_5, 100);
        VAR_5.splice(0, VAR_5.length);
    }
};