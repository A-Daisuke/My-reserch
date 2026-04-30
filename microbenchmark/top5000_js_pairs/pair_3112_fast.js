const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = Math.random();
        }
        FUNCTION_1.prototype.FUNCTION_2 = function (VAR_2) {
          this.VAR_1 += VAR_2;
        };
        var VAR_3 = [];
        var VAR_4;
        for (VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_3.push(new FUNCTION_1());
        }
        var FUNCTION_3 = function (VAR_5) {
          VAR_5.FUNCTION_2(3);
        };
        VAR_3.forEach(FUNCTION_3);
    }
};