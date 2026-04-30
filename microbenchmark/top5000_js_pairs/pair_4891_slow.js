const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          this.VAR_3 = VAR_1;
          this.VAR_4 = VAR_2;
        }
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          this.VAR_3 += this.VAR_4;
        };
        function FUNCTION_3(VAR_5, VAR_6) {
          this.VAR_3 = VAR_5;
          this.VAR_4 = VAR_6;
          this.FUNCTION_4 = function () {
            this.VAR_3 += this.VAR_4;
          };
        }
        new FUNCTION_3(10, 10);
    }
};