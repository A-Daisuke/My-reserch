const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 1000;
        function FUNCTION_1(VAR_3) {
          this.VAR_4 = VAR_3;
        }
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          return this.VAR_4;
        };
        FUNCTION_1.prototype.FUNCTION_3 = function (VAR_5) {
          this.VAR_4 = VAR_5;
        };
        for (var VAR_6 = 0; VAR_6 < VAR_2; VAR_6++) {
          VAR_1.push(new FUNCTION_1("BLAH blah 21"));
        }
    }
};