const Benchmark = {
    run: function() {
        var FUNCTION_1 =
          (VAR_1, ...VAR_2) =>
          (...VAR_3) =>
            VAR_2.reduce((VAR_4, VAR_5) => VAR_5(VAR_4), VAR_1(...VAR_3));
        var FUNCTION_2 =
          (VAR_6, ...VAR_7) =>
          (...VAR_8) =>
            !VAR_2.length ? VAR_1(...VAR_8) : FUNCTION_1(...VAR_7)(VAR_1(...VAR_8));
        var FUNCTION_3 = (VAR_9) => VAR_9 + 1;
        var VAR_10 = [],
          VAR_11 = 1000;
        while (--VAR_11) {
          VAR_10.push(FUNCTION_3);
        }
        FUNCTION_1(...VAR_10);
    }
};