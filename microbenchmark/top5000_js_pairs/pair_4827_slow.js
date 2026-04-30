const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_1 = 1;
          this.VAR_2 = 1;
          this.FUNCTION_2 = function () {
            return this.VAR_2;
          };
          this.FUNCTION_3 = function () {
            return VAR_1;
          };
        }
        FUNCTION_1.prototype.FUNCTION_4 = function () {
          return this.VAR_3;
        };
        FUNCTION_1.prototype.FUNCTION_5 = function () {
          return this.VAR_2;
        };
        FUNCTION_1.prototype.VAR_3 = 1;
        var VAR_4 = new FUNCTION_1();
        var VAR_5 = [0, 1, 2];
        VAR_5.VAR_2 = 1;
        var VAR_6 = 1;
        var VAR_7 = 0;
        VAR_7 += VAR_4.FUNCTION_4();
    }
};