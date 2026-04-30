const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          this.VAR_2 = VAR_1;
        }
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          return this.VAR_2;
        };
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < 100; VAR_4++) {
          VAR_3.push(new FUNCTION_1(VAR_4));
          VAR_3[VAR_4].FUNCTION_2();
        }
    }
};