const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100000);
        VAR_1.FUNCTION_1 = function (VAR_2) {
          var VAR_3 = this.VAR_3;
          for (var VAR_4 = 0; VAR_4 < VAR_3; VAR_4++) VAR_2(this[VAR_4]);
        };
        VAR_1.FUNCTION_1((VAR_6) => {});
    }
};