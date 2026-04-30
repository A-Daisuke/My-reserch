const Benchmark = {
    run: function() {
        const VAR_1 = 1000000;
        function FUNCTION_1(VAR_2) {
          let VAR_3 = 0;
          let VAR_4;
          for (VAR_4 of VAR_2) {
            VAR_3 += VAR_4;
          }
          return VAR_3;
        }
        const VAR_5 = [];
        for (let VAR_6 = 0; VAR_6 < VAR_1; ++VAR_6) {
          VAR_5.push(VAR_6);
        }
        FUNCTION_1(VAR_5);
    }
};