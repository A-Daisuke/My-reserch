const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          this.VAR_3 = VAR_1;
          this.VAR_4 = VAR_2;
        }
        FUNCTION_1.prototype.KEY_1 = function () {
          this.VAR_3 += this.VAR_4;
        };
        function FUNCTION_3(VAR_5, VAR_6) {
          var VAR_7 = VAR_5,
            VAR_8 = VAR_6;
          return {
            KEY_1: function () {
              VAR_5 += VAR_6;
            },
          };
        }
        FUNCTION_3(10, 10);
    }
};