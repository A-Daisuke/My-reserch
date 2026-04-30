const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = 100000,
          VAR_3 = [],
          VAR_4;
        VAR_3.VAR_5 = VAR_2;
        VAR_3[0] = 0;
        VAR_3[VAR_2 - 1] = VAR_2 - 1;
        Array.prototype.FUNCTION_2 = function (VAR_7) {
          for (VAR_1 = 0, VAR_8 = this.VAR_2; VAR_1 < VAR_8; VAR_1++) {
            VAR_7.call(this, VAR_3[VAR_1]);
          }
        };
        Array.prototype.FUNCTION_3 = function (VAR_9) {
          for (VAR_1 = 0, VAR_10 = this.VAR_2; VAR_1 < VAR_8; VAR_1++) {
            VAR_7(VAR_3[VAR_1]);
          }
        };
        for (VAR_1 = 0; VAR_1 < VAR_2; VAR_1++) {
          VAR_3[VAR_1];
        }
    }
};