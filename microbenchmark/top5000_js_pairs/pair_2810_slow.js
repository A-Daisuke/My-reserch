const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          this.VAR_2 = VAR_1;
        }
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          return this.VAR_2;
        };
        FUNCTION_1.prototype.FUNCTION_3 = function () {
          alert(this.FUNCTION_2());
        };
        function FUNCTION_4(VAR_3) {
          this.VAR_2 = VAR_3;
          this.FUNCTION_5 = function () {
            alert(this.FUNCTION_2());
          };
          this.FUNCTION_6 = function () {
            return this.VAR_2;
          };
        }
        var VAR_4 = [];
        for (var VAR_5 = 0; VAR_5 < 1000; VAR_5++) {
          VAR_4.push(new FUNCTION_4("bar"));
        }
    }
};