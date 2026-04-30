const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000).fill(1);
        Array.prototype.FUNCTION_1 = function (VAR_2) {
          for (var VAR_3 = 0; VAR_3 < this.length; VAR_3++) {
            VAR_2(this[VAR_3]);
          }
        };
        VAR_1.forEach(function (VAR_4) {
          VAR_4 * 2;
        });
    }
};