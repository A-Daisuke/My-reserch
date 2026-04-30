const Benchmark = {
    run: function() {
        var VAR_1 = (function () {
          return {
            KEY_1: function () {},
            KEY_2: function () {},
            KEY_3: function () {},
          };
        })();
        VAR_1.KEY_1();
    }
};