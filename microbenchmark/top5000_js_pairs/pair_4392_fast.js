const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          this.VAR_3 = VAR_1;
          this.VAR_4 = VAR_2;
        }
        FUNCTION_1.prototype.FUNCTION_2 = function (VAR_5, VAR_6) {
          this.VAR_3 += VAR_5;
          this.VAR_4 += VAR_6;
        };
        var VAR_7 = new FUNCTION_1(1, 2);
        var VAR_8;
        VAR_8 = VAR_7.constructor.prototype;
    }
};