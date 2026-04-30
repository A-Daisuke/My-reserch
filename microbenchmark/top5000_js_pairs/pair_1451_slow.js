const Benchmark = {
    run: function() {
        VAR_1 = { KEY_1: 2 };
        FUNCTION_1 = function (VAR_2) {
          return VAR_2 + this.KEY_1 + 1;
        };
        VAR_3 = Math.pow(10, 6);
        for (var VAR_4 = 0; VAR_4 < VAR_3; VAR_4++) var VAR_5 = FUNCTION_1.call(VAR_1, VAR_4);
    }
};