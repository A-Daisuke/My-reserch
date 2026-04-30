const Benchmark = {
    run: function() {
        var VAR_1 = {};
        VAR_1.VAR_2 = (function () {
          return { KEY_1: "test" };
        })();
        VAR_1.VAR_4 = (function () {
          return { KEY_2: "test" };
        })();
        VAR_1.VAR_5 = (function () {
          return { KEY_3: "test" };
        })();
    }
};