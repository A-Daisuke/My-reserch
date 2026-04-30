const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2, VAR_3) {
          var VAR_10 = {};
          VAR_10.VAR_11 = VAR_1;
          VAR_10.VAR_12 = VAR_2;
          VAR_10.VAR_13 = VAR_3;
          VAR_10.VAR_14 = [];
          VAR_10.VAR_15 = {};
          VAR_10.FUNCTION_2 = function () {};
          return VAR_10;
        };
        var VAR_9 = FUNCTION_1(0, "foo", { KEY_1: "blah" });
        VAR_9.VAR_16 += 1;
    }
};