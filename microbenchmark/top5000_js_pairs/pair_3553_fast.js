const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: function () {},
        };
        var FUNCTION_1 = function () {};
        (VAR_1["blow"] || FUNCTION_1)();
        (VAR_1["unexist"] || FUNCTION_1)();
    }
};