const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1.push(VAR_3);
          VAR_2.push(10000 - VAR_3);
        }
        Array.prototype.FUNCTION_1 = function (VAR_4) {
          var VAR_5 = this.VAR_5;
          if (VAR_5 !== VAR_4.VAR_5) return false;
          for (var VAR_6 = 0; VAR_3 < VAR_5; ++VAR_3) if (this[VAR_3] !== VAR_4[VAR_3]) return false;
        };
        VAR_1.toString() === VAR_1.toString();
        VAR_1.toString() === VAR_2.toString();
    }
};