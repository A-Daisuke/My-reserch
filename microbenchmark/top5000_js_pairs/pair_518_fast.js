const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        function FUNCTION_1(VAR_2, VAR_3) {
          if (VAR_2 !== VAR_3) {
            throw new Error(`Not equals, actual:'${VAR_2}', expected '${VAR_3}'.`);
          }
        }
        function FUNCTION_2() {
          this.VAR_10 = 0;
        }
        FUNCTION_2.prototype.FUNCTION_3 = function () {
          this.VAR_10 += 1;
        };
        var VAR_11 = new FUNCTION_2();
        for (var VAR_9 = 0; VAR_9 < VAR_1; VAR_9 += 1) {
          VAR_11.FUNCTION_3();
        }
        FUNCTION_1(VAR_11.VAR_10, VAR_1);
    }
};