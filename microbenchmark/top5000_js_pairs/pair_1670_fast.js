const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return {
            KEY_1: VAR_1,
            KEY_2: "name",
            KEY_3: 3 * VAR_1,
            KEY_4: 2 * VAR_1,
            KEY_5: Math.random(),
            KEY_6() {},
            KEY_7() {},
          };
        }
        let VAR_2 = [];
        for (let VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2 = VAR_2.concat([FUNCTION_1(VAR_3)]);
        }
    }
};