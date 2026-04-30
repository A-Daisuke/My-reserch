const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = new Array();
        }
        FUNCTION_1.prototype.FUNCTION_2 = function (VAR_2) {
          this.VAR_1.push(VAR_2);
        };
        FUNCTION_1.prototype.FUNCTION_3 = function () {
          return this.VAR_1.join("");
        };
        var VAR_3 = new FUNCTION_1();
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_3.FUNCTION_2("text");
        }
        var VAR_5 = VAR_3.FUNCTION_3();
    }
};