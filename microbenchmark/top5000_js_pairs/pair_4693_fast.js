const Benchmark = {
    run: function() {
        const FUNCTION_1 = (VAR_5, VAR_6 = "", VAR_7 = 0) =>
          VAR_7 === VAR_5.length
            ? VAR_6
            : FUNCTION_1(VAR_5, `${VAR_5[VAR_7]}${VAR_6}`, ++VAR_7);
        console.log(FUNCTION_1("Today is a wonderful day"));
    }
};