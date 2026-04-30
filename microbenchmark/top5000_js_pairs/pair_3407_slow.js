const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_1() {
          this.VAR_3 = 0;
        }
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          VAR_1.forEach((VAR_4) => (this.VAR_3 = VAR_4));
        };
        new FUNCTION_1().FUNCTION_2();
    }
};