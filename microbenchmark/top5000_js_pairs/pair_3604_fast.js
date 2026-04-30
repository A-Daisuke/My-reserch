const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: function () {},
        };
        var FUNCTION_1 = function () {};
        if (typeof VAR_1["blow"] !== "undefined") VAR_1["blow"]();
        if (typeof VAR_1["unexists"] !== "undefined") VAR_1["unexists"]();
    }
};