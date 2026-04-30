const Benchmark = {
    run: function() {
        function FUNCTION_1() {}
        FUNCTION_1.prototype.FUNCTION_2 = function () {};
        FUNCTION_1.prototype.VAR_1 = {};
        var VAR_2 = new FUNCTION_1();
        try {
          VAR_2.update();
        } catch (VAR_3) {}
    }
};