const Benchmark = {
    run: function() {
        const VAR_1 = {
          KEY_1: 1,
          KEY_2: 2,
          KEY_3: 3,
        };
        function FUNCTION_1() {
          let VAR_2 = 0;
          for (let VAR_3 = 0; VAR_3 < 999999; ++VAR_3) {
            VAR_2 += VAR_1.KEY_1 + VAR_1.KEY_2 + VAR_1.KEY_3;
          }
          console.log(VAR_2);
        }
        FUNCTION_1();
    }
};