const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          this.VAR_4 = VAR_1;
          this.VAR_5 = VAR_2;
          this.VAR_6 = VAR_3;
        }
        FUNCTION_1.prototype.FUNCTION_2 = function () {};
        FUNCTION_1.prototype.FUNCTION_3 = function () {};
        FUNCTION_1.prototype.FUNCTION_4 = function () {};
        var VAR_7 = new FUNCTION_1(777, "str", {});
    }
};