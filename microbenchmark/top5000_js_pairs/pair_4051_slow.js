const Benchmark = {
    run: function() {
        var VAR_1 = {};
        try {
          VAR_1.FUNCTION_1();
        } catch (VAR_2) {
          VAR_1.FUNCTION_1 = function () {};
        }
    }
};