const Benchmark = {
    run: function() {
        Error.VAR_1 = 10;
        var VAR_2;
        try {
          throw new Error();
        } catch (VAR_3) {
          VAR_2 = VAR_3;
        }
        VAR_2.stack;
    }
};