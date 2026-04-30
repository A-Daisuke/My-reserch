const Benchmark = {
    run: function() {
        const VAR_4 = {
          KEY_1: 1,
          KEY_2: 2,
          KEY_3: 3,
        };
        const VAR_1 = new Map();
        VAR_1.set("a", 1);
        VAR_1.set("b", 2);
        VAR_1.set("c", 3);
        (() => {
          let VAR_2 = 0;
          for (let VAR_3 = 0; VAR_3 < 999999; ++VAR_3) {
            VAR_2 += VAR_4.KEY_1 + VAR_4.KEY_2 + VAR_4.KEY_3;
          }
          console.log(VAR_2);
        })();
    }
};