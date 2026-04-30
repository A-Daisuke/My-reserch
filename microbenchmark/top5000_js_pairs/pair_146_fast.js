const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = [],
          FUNCTION_1 = function () {};
        FUNCTION_1.VAR_3 = {
          KEY_1: 1,
          KEY_2: function () {
            return this.KEY_1;
          },
          KEY_3: {
            KEY_4: 1,
            KEY_5: 2,
            KEY_6: "d21d12f12f",
          },
          KEY_7: FUNCTION_1,
        };
        for (; VAR_1 < 100000; VAR_1++) {
          VAR_2.push(new FUNCTION_1());
        }
    }
};