const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 400; VAR_2++) {
          VAR_1.push(Math.random());
        }
        function FUNCTION_1(VAR_3) {
          this.VAR_4 = VAR_1;
          this.VAR_5 = 0;
          this.VAR_6 = VAR_3.length;
        }
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          if (this.VAR_5 < this.VAR_6) {
            return this.VAR_4[this.VAR_5++];
          } else {
            return FUNCTION_1.VAR_7;
          }
        };
        FUNCTION_1.VAR_7 = {};
        VAR_1.forEach(function (VAR_10) {
          true;
        });
    }
};